import React, {useContext, useEffect, useState} from 'react'
import ButtonPlayer from './ButtonPlayer'
import { GlobalStateBattle } from '../../global/GlobalStateContext';
import { CardBattle, ImageBattle } from "./style"

function BattleCard(props) {
    const {pokeDetails,Capitalize} = useContext(GlobalStateBattle)
    const [mobileStatus,setMobileStatus] = useState(false)

    alert("Caso esteja usando modo mobile do navegador, atualize a pagina para carregar versão Mobile")

    useEffect(() => [
        setMobileStatus(false)
    ], [pokeDetails])

    //Caso tela seja menor que 480(Mobile)
    if(window.innerWidth < 480){ //Tela Mobile
        if(!mobileStatus){
            return(
                //Area com Imagem e Nome do Pokémon
                <CardBattle>
                    <h2>{pokeDetails.name && Capitalize(pokeDetails.name)}</h2>
                    <ImageBattle>
                        <img src = {pokeDetails.sprites && pokeDetails.sprites.front_default} alt = {pokeDetails.name}/>
                    </ImageBattle>
                    <button onClick = {() => setMobileStatus(!mobileStatus)}>Verificar Status</button>
                   
                </CardBattle>
            )
        }else{
            //Area com Status do Pokémon
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
