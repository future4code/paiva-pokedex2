import React, { useContext } from 'react'
// import useDetails from '../hooks/useDetails'
import { Header } from '../components/header/header'
import { goToHome } from '../router/Coordinator';
import { useHistory } from "react-router-dom";
import { GlobalStateContext } from '../global/GlobalStateContext';

const Pokedex = () => {
    const {pokeDetails} = useContext(GlobalStateContext)
    const history = useHistory();

    const listPokemon = pokeDetails.map((poke) => {
        return  (
            
            <div>
                
                <h2>{poke.name}</h2>
                <img src = {poke.sprites.front_default}/>
            </div>

        )

    })
    
    return (
        <div>
            <Header>
                    <button onClick={()=> goToHome(history)}>Voltar para a lista de pokemons</button>
                    <h3>Nome do pokemon</h3>
                </Header>

            {listPokemon.length ? listPokemon : "Carregando"}
        </div>
    )
}

export default Pokedex
