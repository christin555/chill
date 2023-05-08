import {Header, Block} from './shared/StyledElements';
import Select from './shared/Select';

const TsView = () => {
    const dateNow:Date = new Date();
    const blackDay:Date = new Date(2022, 3, 10);
    const hotDay:Date = new Date( dateNow.getMonth() > 5 ? dateNow.getFullYear() +1 : dateNow.getFullYear(), 5, 1);

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
