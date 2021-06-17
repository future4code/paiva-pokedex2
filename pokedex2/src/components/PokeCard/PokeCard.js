import React, {useContext} from 'react'
import { CardContainer, ImgContainer, PokeImg, ButtonContainer } from './styled'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { goTo } from '../../router/Coordinator'
import { useHistory } from 'react-router-dom'




const PokeCard = (props) => {
    const {pokedex, setPokedex} = useContext(GlobalStateContext)

    const history = useHistory()
      
    const addPokemon = (name, image) => {
        const poke = {name: name, image: image }
        setPokedex([...pokedex, poke])        
    }

    const removePokemom = (poke) => {
        const newPokedex =  pokedex.filter(pokemon => pokemon.name !== poke )
        setPokedex(newPokedex) 
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
                <button onClick={()=> props.pokedex ? (removePokemom(props.name)) : (addPokemon(props.name, props.pokeImg))} >Adicionar a Pokedex</button>
                <button onClick = {() => goTo(history,`/details/${props.name}`)}>Detalhes</button>
            </ButtonContainer>
        </CardContainer>
    )
}

export default PokeCard
