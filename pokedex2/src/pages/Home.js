import React from 'react'
import Header from "../components/header/header"
import { useHistory } from "react-router-dom";
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
