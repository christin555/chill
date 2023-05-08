
type Named = {
    [key: string] :{
        start: number
        end: number
    }
}

type PromiseElement = [
    promise: any,
    name: string,
    handler?: () => object
]

type HandlersRes = {
    [key: string] : (arrayOfResult: Array<object>) => void
}

interface promiseManager {
    push(...props: PromiseElement): object
    push(...props: PromiseElement[]): object
    resolveAll():Promise<void>
    getAll():{[key in keyof HandlersRes]: object }
    get(name: keyof HandlersRes, def?: any):{[key in keyof HandlersRes]: object }
}

const promiseManager = ():promiseManager => {
    const named:Named = {} as Named;
    const promises: any[] = [];
    const handlersRes: HandlersRes = {};
    let resolvedPromises: any[] = [];
    let isResolved = false;

    const setNamed = (name:string, len: number) => {
        if (!named[name]) {
            named[name] = {
                start: len,
                end: len + 1
            }
        } else {
            named[name].end += 1;
        }
    };

    const _push: (...props: PromiseElement) => void = (promise, name, handler) => {
        promises.push(promise);

        const len = promises.length - 1;

        setNamed(name, len);

        if (handler) {
            handlersRes[name] = handler;
        }
    }

    return {
        push(...props) {
            (Array.isArray(props[0]) ? props : [props])
                .forEach(([promise, name, handler]) => {
                    _push(promise, name, handler);
            });

            return this;
        },
        async resolveAll() {
            resolvedPromises = await Promise.all(promises);

            isResolved = true;
        },
        getAll() {
            if (!isResolved) {
                throw new Error('Need to call resolveAll function');
            }
            const res = {} as {[key: string]: object} ;

            Object.entries(named).forEach(([name, {start, end}]) => {
                let promiseResult:any = resolvedPromises
                    .slice(start, end)
                    .flat();

                if (handlersRes[name] && promiseResult) {
                    promiseResult = handlersRes[name](promiseResult);
                }


                res[name] = promiseResult;
            });

            return res;
        },
        get(name = '', def = []) {
            if (!named[name]) {
                return def;
            }

            if (!isResolved) {
                throw new Error('Need to call resolveAll function');
            }

            const {
                start,
                end
            } = named[name];

            return resolvedPromises
                .slice(start, end)
                .flat();
        }
    };
};

export default promiseManager;
