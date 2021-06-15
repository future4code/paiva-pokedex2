import React from 'react'
import { Header } from '../components/header/header'
import { goToHome } from '../router/Coordinator';
import { useHistory } from "react-router-dom";
import PokeCard from '../components/PokeCard/PokeCard'

const Pokedex = () => {
    const history = useHistory();
    return (
        <div>

            <PokeCard/>

            <Header>
                <button onClick={()=> goToHome(history)}>Voltar para a lista de pokemons</button> 
                <h3>Nome do pokemon</h3>
            </Header>
           <PokeCard/>
            Pokedex

        </div>
    )
}

export default Pokedex
