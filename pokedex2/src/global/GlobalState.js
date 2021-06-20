import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constant/url"
import { GlobalStateContext } from "./GlobalStateContext"

const GlobalState = (props) => {
    const [pokemon, setPokemon] = useState([])
    const [pokeDetails, setPokeDetails] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [pageNumber,setPageNumber] = useState(0)

    useEffect(() => {
        getPokemon(pageNumber) // Pega 20 pokémon 
    }, [pageNumber])

    const getPokemon = (pageNumber) => {
        setPokeDetails([])
        let offset = 0
        if(pageNumber > 1){ //Se pagina maior quie 1, Offset recebe calculo para restatar mais pokémon
            offset = (20*pageNumber) -20
        }
        axios
            .get(`${BASE_URL}?limit=20&offset=${offset}`)
            .then((response) => {
                setPokemon(response.data.results)
            })
            .catch((err) => {
                alert(err.message)
            })
    }


    const getPokeDetail = (name) => { // Resgata pokémon com detalhes
        const detailList = []

        name.forEach((poke) => {

            if(poke.name){

                axios
                .get(`${BASE_URL}/${poke.name}`)
                .then((response) => {
                    detailList.push(response.data)
                    if(detailList.length === name.length){
                        const pokeOrder = detailList.sort((a,b) => {
                            return a.id - b.id
                        })
                        setPokeDetails(pokeOrder)
                    }
                })
                .catch((err) => {
                    alert(err.message)
                })
            }
        })
    }

    useEffect(() => {
        getPokeDetail(pokemon)
        
    }, [pokemon])

    const Capitalize = (str) => { //Transforma primeira letra em maiusculo 
        return str.charAt(0).toUpperCase() + str.slice(1);
        }   


    return (
        <GlobalStateContext.Provider value={{pokemon,setPokemon, pokeDetails, pokedex, setPokedex,setPageNumber,Capitalize }} >
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
