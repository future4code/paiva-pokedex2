import React, { useContext } from 'react'
import { Header } from '../components/header/header'
import { goTo } from '../router/Coordinator';
import { useHistory } from "react-router-dom";
import { GlobalStateContext } from '../global/GlobalStateContext'
import PokeCard from '../components/PokeCard/PokeCard'

const Pokedex = (props) => {
    const { pokedex, setPokedex } = useContext(GlobalStateContext)
    const history = useHistory();

    const PokedexList = pokedex.map((poke) => {
        return (

            <PokeCard
                name={poke.name}
                img={poke.image}
            />
        )
    })

    return (
        <div>
            <Header>
                <button onClick={() => goTo(history, "/")}>Voltar para a lista de pokemons</button>
                <h3>Nome do pokemon</h3>
            </Header>

            {PokedexList.length ? PokedexList : "nada na pokedex"}
        </div>
    )
}

export default Pokedex
