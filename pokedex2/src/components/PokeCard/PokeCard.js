import React from 'react'
import { CardContainer, ImgContainer, PokeImg, ButtonContainer } from './styled'

const PokeCard = () => {
    return (
        <CardContainer>
            <ImgContainer>
            <PokeImg
            src="https://picsum.photos/100"
            alt=""
             />
            </ImgContainer>
            <ButtonContainer>
                <button>Adicionar a Pokedex</button>
                <button>Detalhes</button>
            </ButtonContainer>
        </CardContainer>
    )
}

export default PokeCard
