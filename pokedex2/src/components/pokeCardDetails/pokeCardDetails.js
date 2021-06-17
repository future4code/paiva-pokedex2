import React, { useContext } from 'react'
import { CardContainer, ImgContainer, PokeImg, ButtonContainer } from './Styled'
import { GlobalStateContext } from '../../global/GlobalStateContext'

const PokeCardDetails = (props) => {
    const { pokedex, setPokedex } = useContext(GlobalStateContext)

    const removePokemom = (poke) => {
       const newPokedex =  pokedex.filter(pokemon => pokemon.name !== poke )
       setPokedex(newPokedex) 
    }

    return (
        <CardContainer>
            <ImgContainer>
                <PokeImg
                    src={props.img}
                    alt={props.name}
                />
            </ImgContainer>
            <ButtonContainer>
                <button onClick={()=> removePokemom(props.name)} >Remover da Pokedex</button>
                <button>Detalhes</button>
            </ButtonContainer>
        </CardContainer>
    )
}

export default PokeCardDetails