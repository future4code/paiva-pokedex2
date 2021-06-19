import React from 'react'
import  Header  from '../components/Header/header'
import { useHistory } from "react-router-dom";
import { goTo } from "../router/Coordinator";
import ScreenPokemon from '../screens/screenPokemon';
import {AreaHome} from "./style"

const Home = () => {
    const history = useHistory();
    return (
        <div>
            <Header
            pagina = "Lista de Pokemons"
            h = {history}
            />
            <AreaHome>
                <ScreenPokemon/>
            </AreaHome>

        </div>
    )
}

export default Home
