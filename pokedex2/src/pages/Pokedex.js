import React, { useContext } from 'react'
import Header from "../components/header/header"
import { useHistory } from "react-router-dom";
import { GlobalStateContext } from '../global/GlobalStateContext'
import PokeCard from '../components/PokeCard/PokeCard'
import { AreaHome } from './style';
import { AreaPokeCards } from '../screens/style';

const Pokedex = (props) => {
    const { pokedex } = useContext(GlobalStateContext)
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
            <AreaHome>
            <AreaPokeCards>
            {PokedexList.length ? PokedexList : "Nada na pokedex"}
            </AreaPokeCards>
            </AreaHome>
           
        </div>
    )
}

export default Pokedex
