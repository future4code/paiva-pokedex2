
import React from 'react'
import { Header } from '../components/header/header'
import { goTo } from '../router/Coordinator';
import { useHistory } from "react-router-dom";
import ScreenDetails from '../screens/screenDetails';

const Details = () => {
    const history = useHistory();
    return (
        <div>
           <Header>
                <button onClick={() => goTo(history, "/")}>Voltar</button> 
                <h3>Nome do pokemon</h3>
                <button>Adicionar/Remover da pokedex</button> 
            </Header>
            <ScreenDetails/>
        </div>
    )
}

export default Details

