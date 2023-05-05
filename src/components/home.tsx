import Button from "./shared/Buttons";
import {Header, Block} from './shared/StyledElements';

const Home = () => {
    return <>
        <Header> Home </Header>
        <Block>
            <Button
                label={'kick me'}
                onClick={console.log}
            />
        </Block>
    </>
}

export default Home;
