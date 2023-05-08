import {Header, Block} from './shared/StyledElements';
import Select from './shared/Select';
import promiseManager from "./tools/promiseManager";

const TsView = () => {
    const pm = promiseManager();
    pm.push(
        [new Promise((resolve) => resolve([{id: 2, name: 3}])), 'name2'],
        [new Promise((resolve) => resolve([{id: 3, name: 3}])), 'name3']
        );

    pm.push(new Promise((resolve) => resolve([{id: 1, name: 2}])), 'name');
    pm.resolveAll().then(() =>{
       const res =  pm.getAll();
       console.log('result', res)
    })

    return <>
        <Header> TS </Header>
        <Block>
       <Select
           onChange={console.log}
           options={[
               {value: 1,label: 'text 1 '},
               {value: 2,label: 'text 2 '},
               {value: 3,label: 'text 3 '},
               {value: 4,label: 'text 4'}
           ]}
           selected={1}
       />
            <Select
                onChange={console.log}
                options={[
                    {value: 1,label: 'text 1 '},
                    {value: 2,label: 'text 2 '},
                    {value: 3,label: 'text 3 '},
                    {value: 4,label: 'text 4'}
                ]}
                selected={'3'}
            />
            <Select
                onChange={console.log}
                options={[
                    {value: 1,label: 'text 1 '},
                    {value: 2,label: 'text 2 '},
                    {value: 3,label: 'text 3 '},
                    {value: 4,label: 'text 4'}
                ]}
                selected={{value: 4,label: 'text 4'}}
            />
        </Block>
    </>
}

export default TsView;
