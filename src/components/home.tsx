import Button from "./shared/Buttons";
import {Header, Block} from './shared/StyledElements';
import styled from "styled-components";

interface CardProps {
    img: string;
    isBigBoy?: boolean
}

const Cards = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   grid-gap: 20px;
   margin: 20px 0;
     grid-auto-flow: dense;
`;

const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px 6px;
  
   ${({isBigBoy}) => isBigBoy && `
    grid-column-end: span 2;
  `}
`;

const Home = () => {
    const cards = new Array(17).fill({
        title: 'Debut in Echo',
        image: 'https://avatars.dzeninfra.ru/get-zen_doc/118779/pub_5b4b4abf83eff800a93114c2_5b4b5d57a701a500aa2a6f03/scale_1200',
        content: 'From earliest childhood I couldn\'t sleep at night.\n' +
            ' As soon as morning rolled around, though, I slept like a lamb.\n' +
            ' And as everyone knows, this is exactly the time when they hand out the lucky tickets...'
    })

    return <>
        <Header> Home </Header>
        <Block>
            <Cards> {
                cards.map(({title, image, content}, index) =>
                    <Card img={image} isBigBoy={Math.floor(Math.random() * 14 ) % 7 === 0}>
                    <h4> {title} </h4>
                    <span> {content} </span>
                    </Card>
                )
            } </Cards>
            <Button
                label={'kick me'}
                onClick={console.log}
            />
        </Block>
    </>
}

export default Home;
