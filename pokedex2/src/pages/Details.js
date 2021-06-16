
import React from 'react'
import { Header } from '../components/header/header'
import { goToHome } from '../router/Coordinator';
import { useHistory } from "react-router-dom";

const Details = () => {
    const history = useHistory();
    return (
        <div>
           <Header>
                <button onClick={() => goToHome(history)}>Voltar</button> 
                <h3>Nome do pokemon</h3>
                <button>Adicionar/Remover da pokedex</button> 
            </Header>
            Details 
        </div>
    )
}

export default Details

