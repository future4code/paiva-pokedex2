import React, {useContext, useEffect} from 'react'
import { CardContainer, ImgContainer, PokeImg,
        ButtonContainer,ChangePokedex,DetailsButton,
        ButtonPokedex,PokeName } from './styled'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { goTo } from '../../router/Coordinator'
import { useHistory } from 'react-router-dom'

const PokeCard = (props) => {
    const {pokedex, setPokedex,Capitalize} = useContext(GlobalStateContext)
    const history = useHistory()

    useEffect(() => {
        checkPokedex()
    } , [pokedex])

    const checkPokedex = () => {
        if(pokedex.find(poke => poke.name === props.name)){
            return true
        }else{
            return false
        }
    }
      
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
            <ImgContainer inPokedex = {checkPokedex()}>
            <ButtonPokedex>
                <PokeName>
                    <h3>{Capitalize(props.name)}</h3>
                </PokeName>
                </ButtonPokedex>
            <PokeImg
                src= {props.pokeImg}
                alt= {props.name}
             />

            </ImgContainer>
            <ButtonContainer>
            <ChangePokedex inPokedex = {checkPokedex()} onClick={()=> checkPokedex() ? (removePokemom(props.name)) : (addPokemon(props.name, props.pokeImg))} >{checkPokedex() ? "Remover da Pokedex":"Adicionar à Pokedex"}</ChangePokedex>
                <DetailsButton onClick = {() => goTo(history,`/details/${props.name}`)}>Detalhes</DetailsButton>
            </ButtonContainer>
        </CardContainer>
    )
}

export default PokeCard
