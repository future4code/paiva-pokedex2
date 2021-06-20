import React, {useContext, useEffect, useState} from 'react'
import ButtonPlayer from './ButtonPlayer'
import { GlobalStateBattle } from '../../global/GlobalStateContext';
import { CardBattle, ImageBattle } from "./style"

function BattleCard(props) {
    const {pokeDetails,Capitalize} = useContext(GlobalStateBattle)
    const [mobileStatus,setMobileStatus] = useState(false)

    useEffect(() => [
        setMobileStatus(false)
    ], [pokeDetails])

    const goStatus = () => {
        setMobileStatus(!mobileStatus)
    }

    console.log(window.innerWidth)

    if(window.innerWidth < 480){
        if(!mobileStatus){
            return(
                <CardBattle>
                    <h2>{pokeDetails.name && Capitalize(pokeDetails.name)}</h2>
                    <ImageBattle>
                        <img src = {pokeDetails.sprites && pokeDetails.sprites.front_default}/>
                    </ImageBattle>
                    <button onClick = {() => setMobileStatus(!mobileStatus)}>Verificar Status</button>
                   
                </CardBattle>
            )
        }else{
            return(
                <CardBattle>
                    <button onClick = {() => setMobileStatus(!mobileStatus)}>Verificar Pokémon</button>
                    <ButtonPlayer/>

                </CardBattle>
            )
        }      

        }
        
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
