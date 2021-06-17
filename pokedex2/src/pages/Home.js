import React from 'react'
import { Header } from '../components/header/header'
import { useHistory } from "react-router-dom";
import { goTo } from "../router/Coordinator";
import ScreenPokemon from '../screens/screenPokemon';
import {AreaHome} from "./style"

const Home = () => {
    const history = useHistory();
    return (
        <div>
            <Header>
                <button onClick={()=>{goTo(history,"/pokedex") }} >Pokedex </button> 
                <h3>Lista de pokemon</h3>
            </Header>

            <AreaHome>
                <ScreenPokemon/>
            </AreaHome>

        </div>
    )
}

export default Home
