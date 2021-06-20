import React, {useContext} from 'react'
import ButtonEnemy from './ButtonEnemy'
import { GlobalStateBattle } from '../../global/GlobalStateContext';
import { CardBattle, ImageBattle } from "./style"

function EnemyCard(props) {
    const {enemy,Capitalize} = useContext(GlobalStateBattle)
    return (
        <CardBattle>
            <h2>{enemy.name && Capitalize(enemy.name)}</h2>

            <ImageBattle>
                <img src = {enemy.sprites && enemy.sprites.front_default}/>
            </ImageBattle>

            <ButtonEnemy
            />

        </CardBattle>
    )
}

export default EnemyCard
