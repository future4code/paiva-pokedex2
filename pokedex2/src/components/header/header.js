import React, {useContext, useEffect} from 'react'
import {HeaderArea} from "./style"
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { useHistory } from 'react-router-dom'
import {goTo, toBack} from "../../router/Coordinator"

function Header(props) {
    const {pokedex, setPokedex} = useContext(GlobalStateContext)
    const history = useHistory()
    console.log(history)
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
            <HeaderArea>
                {props.pagina !== "Home" && (

                    <button onClick={() => toBack(props.h)}>
                        Voltar
                    </button> 

                    
                )}

                {props.pagina !== "Pokedex" && (
                    <button onClick={() => goTo(props.h,"/pokedex")}>
                        Pokedex
                    </button> 
                )}

                <h3>{props.pagina}</h3>
                {props.pagina === "Detalhes" && ( 
                    <button onClick={()=> checkPokedex() ?
                     (removePokemom(props.name)) : 
                     (addPokemon(props.name, props.pokeImg))} >
                         {checkPokedex() ? "Remover da Pokedex":"Adicionar a Pokedex"}</button>)}
              
            </HeaderArea>
    )
}

export default Header
