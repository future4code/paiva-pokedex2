import React from 'react'
import { Header } from '../components/header/header'
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../router/Coordinator";
import PokeCard from '../components/PokeCard/PokeCard';



const Home = () => {
    const history = useHistory();
    return (
        <div>
            <Header>
                <button onClick={()=>{goToPokedex(history) }} >Pokedex </button> 
                <h3>Lista de pokemon</h3>
            </Header>
            Home
           <PokeCard/>
        </div>
    )
}

export default Home
