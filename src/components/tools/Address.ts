const viewToObject = {
    flat: {
        house: true,
        flat: true
    },
    simpleFlat: {
        house: true,
        flat: false
    },
    commercial: {
        house: true,
        number: false
    },
    commercialPlot: {
        land: false
    },
    landPlot: {
        land: true
    },
    house: {
        house: false,
        land: true
    },
    garage: {
        house: true
    },
    parking: {
        house: true,
        box: true
    },
    townhouse: {
        house: false,
        land: true,
        flat: true
    },
    simple: {
        house: false,
        flat: false
    },
    secondaryEstate: {
        house: true
    },
    newBuilding: {
        house: false
    },
    noAdditional: {}
} as const;


type TypeViewToObject = typeof viewToObject;
type ViewType = keyof TypeViewToObject;

type Address = {
    id: number
    city: string
    street: string,
    flat?: string,
    house?: string,
    number?: string,
    box?: string,
    land?: string
}

interface Props<T extends ViewType> {
    view: T;
    address: Address & Required<Pick<Address, Extract<keyof TypeViewToObject[T], keyof Address>>>
}

function Address <T extends ViewType>({address, view}: Props<T>) {
    let strings = [address.city, address.street];

    Object.keys(viewToObject[view]).forEach((layer) => {
        const layerValue  = (address as Address)[layer as keyof Address];
        if(layerValue) {
            strings.push(layerValue as string)
        }
    })

    return strings.join(', ')
}


export default Address;
