import {Header, Block} from './shared/StyledElements';

const Dates = () => {
    const dateNow:Date = new Date();
    const blackDay:Date = new Date(2022, 3, 10);
    const hotDay:Date = new Date( dateNow.getMonth() > 5 ? dateNow.getFullYear() +1 : dateNow.getFullYear(), 5, 1);

    return <>
        <Header> Dates </Header>
        <Block>
            <p> Время у Леши: {dateNow.toLocaleString("ru", {
                hour: 'numeric',
                minute: 'numeric',
                timeZone: "Asia/Yerevan"
            })}
            </p>
            <p>  Количество дней без инстаграма : {Math.ceil((+dateNow - +blackDay) / (60 * 60 * 24 * 1000))};</p>
            <p>  Осталось дней чтобы успеть похудеть: {Math.ceil((+hotDay - +dateNow) / (60 * 60 * 24 * 1000))}; </p>
        </Block>
    </>
}

export default Dates;
