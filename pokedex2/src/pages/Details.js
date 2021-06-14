import React from 'react'
import styled from 'styled-components'


const FakeCard = styled.div`
    background-color: red;
    border: 1px black solid;
    width:100%;
    height:100%;
    margin:1rem;
`

const Div = styled.div`
    display:flex;
    justify-content: space-between;

    height:100%;

    padding:2rem;
`

const CardArea = styled.div`
    width:${props => props.imageCard ? "20%": "30%"};
    height:100%;
`


const Details = (props) => {
    return (
        <Div>
            <CardArea imageCard> 
                <FakeCard>
                    <h1> Imagem Frontal </h1>
                </FakeCard>
                <FakeCard>
                    <h1> Imagem de Costas </h1>
                </FakeCard>
            </CardArea>
            <CardArea>
            <FakeCard id = "stats">
                <h1>Stats</h1>
            </FakeCard>
            </CardArea>
            <CardArea>
                <FakeCard>
                    <h1>Tipos</h1>
                </FakeCard>
                <FakeCard>
                    <h1>Moves</h1>
                </FakeCard>
            </CardArea>
        </Div>
        
    )
}

export default Details
