import React, { useContext } from 'react'
import BattleCard from '../components/BattleCard/BattleCard'
import EnemyCard from '../components/BattleCard/EnemyCard';
import { GlobalStateBattle } from '../global/GlobalStateContext';
import {BattleArena, Rounds,Board,Scores,Score,BattleArea} from "./style"

function ScreenBattle(props) {
    const {choiceMade,changeRound,playerPoints,enemyPoints,rounds,response} = useContext(GlobalStateBattle)
    return (
        <BattleArea>
            <div>
                <Rounds>
                    
                    <h5>Escolha o status do seu Pokémon, se for maior que o do inimigo, você vence!!</h5>
                </Rounds>
                <Rounds>
                
                <h1>Rodadas: {rounds}</h1>
                </Rounds>
                
                <Board>
                    <h1>Pontuação</h1>
                    <p>Caso esteja usando modo mobile do navegador, atualize a pagina para carregar versão Mobile</p>
                    <Scores>
                        <Score>Jogador: {playerPoints}</Score>
                        <Score>Adversário: {enemyPoints}</Score>
                        
                    </Scores>
                    {response !== "" && <h2>{response}</h2>}
                </Board>

            </div>


            <BattleArena>
                <BattleCard/>
                    {choiceMade ? (<button onClick = {() => changeRound()}>Novo Round</button>): (<h1>X</h1>)}
                <EnemyCard/>
            </BattleArena>
        </BattleArea>

    )
}

export default ScreenBattle
