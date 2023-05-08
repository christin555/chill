import React from 'react';
import SelectReact, {SingleValue} from 'react-select';

type Option = {
    value: number | string
    label: string
}

type  Selected = number | string | null;

type SelectProps = {
    selected: Selected | Option
    options: Option[]
    onChange: (newValue: Selected) => void
}

function isOption(value: any): value is Option{
    return !!(value as Option).value;
}

function Select ({selected, options, onChange}: SelectProps) {
    const getValue  = (selected: Selected | Option) => {
        if(isOption(selected)) {
            return selected
        }

        return options.find(({value}) => value === selected || Number(selected) === value)
    }

    const handlerChange = (newValue: SingleValue<Option> ) => {
        if(isOption(newValue)){
            onChange(newValue.value)
        }

        onChange(null)
    }

    return <SelectReact
        value = {getValue(selected)}
        options = {options}
        onChange={handlerChange} />
}

export default Select;
