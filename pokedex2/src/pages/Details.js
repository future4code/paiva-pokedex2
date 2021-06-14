import React from 'react'
import styled from 'styled-components'


const FakeCard = styled.div`
    background-color: red;
    border: 1px black solid;
    height:100%;
`

const Div = styled.div`
    display:flex;
    height:100%;
    width:100%;
    padding:2rem;
`

const ImageArea = styled.div`
    height:70%;
`


const Details = () => {
    return (
        <Div>
            <ImageArea>
                <FakeCard>
                    <h1> Imagem Frontal </h1>
                </FakeCard>
                <FakeCard>
                    <h1> Imagem de Costas </h1>
                </FakeCard>
            </ImageArea>
            <FakeCard id = "stats">
                <h1>Stats</h1>
            </FakeCard>
            <div>
                <FakeCard>
                    <h1>Tipos</h1>
                </FakeCard>
                <FakeCard>
                    <h1>Moves</h1>
                </FakeCard>
            </div>
        </Div>
        
    )
}

export default Details
