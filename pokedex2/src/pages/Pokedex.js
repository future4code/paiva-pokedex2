import React, { useContext } from 'react'
import Header from '../components/header/Header'
import { goTo } from '../router/Coordinator';
import { useHistory } from "react-router-dom";
import { GlobalStateContext } from '../global/GlobalStateContext'
import PokeCard from '../components/PokeCard/PokeCard'

const Pokedex = (props) => {
    const { pokedex, setPokedex } = useContext(GlobalStateContext)
    const history = useHistory();

    console.log(pokedex)

    const PokedexList = pokedex.map((poke) => {
        return (

            <PokeCard
                name={poke.name}
                img={poke.image}
                pokeName = {poke.name}
                pokeImg = {poke.image}
            />
        )
    })

    return (
        <div>
            <Header
            pagina = "Pokedex"
            h = {history}
            />
            {PokedexList.length ? PokedexList : "nada na pokedex"}
        </div>
    )
}

export default Pokedex
