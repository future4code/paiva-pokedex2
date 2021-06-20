import React, {useContext, useEffect} from 'react'
import {HeaderArea, LeftHeader, RightButton, LeftHeader2} from "./style"
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { useHistory } from 'react-router-dom'
import {goTo, toBack} from "../../router/Coordinator"

function Header(props) {
    
    const {pokedex, setPokedex} = useContext(GlobalStateContext)
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
        <div>
            <HeaderArea>
                {props.pagina !== "Home" && (

                    <LeftHeader2 onClick={() => toBack(props.h)}>
                        Voltar
                    </LeftHeader2> 

                    
                )}

                {props.pagina !== "Pokedex" && (
                    <LeftHeader onClick={() => goTo(props.h,"/pokedex")}>
                        Ir para Pokedex
                    </LeftHeader> 
                )}


                <h3>{props.pagina}</h3>
                {props.pagina === "Detalhes" && ( 
                    <RightButton onClick={()=> checkPokedex() ?
                     (removePokemom(props.name)) : 
                     (addPokemon(props.name, props.pokeImg))} >
                         {checkPokedex() ? "Remover da Pokedex":"Adicionar a Pokedex"}</RightButton>)}
              
            </HeaderArea>
            
            {props.pagina !== "Batalha Super Trunfo Pokémon" && (
                    <button onClick={() => goTo(props.h,"/battle")}>
                        Jogar Batalha Pokémon
                    </button> 
                )}
            </div>
    )
}

export default Header
