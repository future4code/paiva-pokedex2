import React, {useContext} from 'react'
import ButtonPlayer from './ButtonPlayer'
import { GlobalStateBattle } from '../../global/GlobalStateContext';
import { CardBattle, ImageBattle } from "./style"

function BattleCard(props) {
    const {pokeDetails,Capitalize} = useContext(GlobalStateBattle)
    return (
        <CardBattle>
            <h2>{pokeDetails.name && Capitalize(pokeDetails.name)}</h2>

            <ImageBattle>
                <img src = {pokeDetails.sprites && pokeDetails.sprites.front_default}/>
            </ImageBattle>

            <ButtonPlayer
            />
        </CardBattle>
    )
}

export default BattleCard
