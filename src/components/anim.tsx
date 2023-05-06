import {Header, Block} from './shared/StyledElements';
import Button from "./shared/Buttons";
import React from "react";
import styled from "styled-components";


const TranqBox = styled.div`
  background-color: indianred;
  padding: 10px 6px;
  width: 500px;
  border-radius: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bar = styled.div`
  margin-top: 100px;
  display: flex;
  gap: 10px
`;

class Anim extends React.Component<{}, {}> {
    ref: React.RefObject<HTMLInputElement>;
    cubeAnimation: any;

    constructor(props: {}) {
        super(props);
        this.ref = React.createRef();
    }

    startMove(){
        if (this.cubeAnimation) {
            this.cubeAnimation.play()

            return
        }

        if (this.ref.current) {
            let cubeTiming = {
                duration: 500,
                iterations: Infinity
            }
            let cubeRotating = [
                {transform: 'rotate(0deg)', backgroundColor: 'red'},
                {backgroundColor: 'blue', offset: 0.1},
                {transform: 'rotate(360deg)', backgroundColor: 'red'}
            ]

            this.cubeAnimation = this.ref.current.animate(cubeRotating, cubeTiming);
        }
    }

    fasterMove(){
        if (this.cubeAnimation) {
            this.cubeAnimation.playbackRate *= 1.5
        }
    }

    stopMove(){
        this.cubeAnimation.pause()
    }

    render() {

        return <>
            <Header> Anim </Header>
            <Block>
                <TranqBox ref={this.ref}> tranquilizerstranquilizerstranquilizerstranquilizers </TranqBox>
                <Bar>
                    <Button
                        label={'Кручу верчу'}
                        onClick={this.startMove.bind(this)}
                    />
                    <Button
                        label={'Быстрее'}
                        onClick={this.fasterMove.bind(this)}
                    />
                    <Button
                        label={'Хватит'}
                        onClick={this.stopMove.bind(this)}
                    />
                </Bar>
            </Block>
        </>
    }
}

export default Anim;
