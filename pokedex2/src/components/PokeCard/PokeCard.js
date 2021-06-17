import React, {useContext} from 'react'
import { CardContainer, ImgContainer, PokeImg, ButtonContainer } from './styled'
import { GlobalStateContext } from '../../global/GlobalStateContext'



const PokeCard = (props) => {
    const {pokedex, setPokedex} = useContext(GlobalStateContext)
        
    const addPokemon = (name, image) => {
        const poke = {name: name, image: image }
        setPokedex([...pokedex, poke])        
    }

    return (
        <CardContainer>
            <ImgContainer>
            <PokeImg
            src= {props.pokeImg}
            alt= {props.name}
             />
            </ImgContainer>
            <ButtonContainer>
                <button onClick={()=> addPokemon(props.name, props.pokeImg)} >Adicionar a Pokedex</button>
                <button>Detalhes</button>
            </ButtonContainer>
        </CardContainer>
    )
}

export default PokeCard
