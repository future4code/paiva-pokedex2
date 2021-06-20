import React, { useContext } from 'react'
import { GlobalStateBattle } from '../../global/GlobalStateContext';
import { StatsSpace,StatsDiv } from "./style"

function ButtonPlayer() {  
    const {pokeStats,checkStats,choiceMade} = useContext(GlobalStateBattle)
    console.log(choiceMade)
    return (
        <StatsSpace>
            <StatsDiv disabled = {choiceMade} onClick = {() =>  checkStats(0, "HP")}><h3>HP</h3> <h3>{pokeStats && pokeStats[0]}</h3></StatsDiv>
            <StatsDiv disabled = {choiceMade} onClick = {() =>  checkStats(1, "Attack")}><h3>Attack</h3> <h3>{pokeStats && pokeStats[1]}</h3></StatsDiv>
            <StatsDiv disabled = {choiceMade} onClick = {() =>  checkStats(2, "Defense")}><h3>Defense</h3> <h3>{pokeStats && pokeStats[2]}</h3></StatsDiv>
            <StatsDiv disabled = {choiceMade} onClick = {() =>  checkStats(3, "Special Attack")}><h3>Special Attack</h3> <h3>{pokeStats && pokeStats[3]}</h3></StatsDiv>
            <StatsDiv disabled = {choiceMade} onClick = {() =>  checkStats(4, "Special Defense")}><h3>Special Defense</h3> <h3>{pokeStats && pokeStats[4]}</h3></StatsDiv>
            <StatsDiv disabled = {choiceMade} onClick = {() =>  checkStats(5, "Speed")}><h3>Speed</h3> <h3>{pokeStats && pokeStats[5]}</h3></StatsDiv>
        </StatsSpace>
    )
}

export default ButtonPlayer
