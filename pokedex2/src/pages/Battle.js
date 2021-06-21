import React from 'react'
import ScreenBattle from '../screens/screenBattle'
import { useHistory } from "react-router-dom";
import Header from "../components/header/header"

function Battle() {
    const history = useHistory();
    return (
        <div>
        <Header
        pagina = "Batalha Super Trunfo Pokémon"
        h = {history}
        />
        <ScreenBattle/>
        </div>

    )
}

export default Battle
