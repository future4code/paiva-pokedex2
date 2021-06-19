import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../constant/url'
import useDetails from '../hooks/useDetails'

function ScreenBattle(props) {
    const [enemy,setEnemy] = useState([{}])
    const [pokeDetails,getPokeDetail] = useDetails()

    useEffect(() => {
        const pokeJogador = Math.floor(Math.random() * 898) +1;
        getPokeDetail(pokeJogador)
        getEnemy()
    }, [])


    const getEnemy = () => {
        const pokeInimigo = Math.floor(Math.random() * 898)+1;
        axios
        .get(`${BASE_URL}/${pokeInimigo}`)
        .then((response) => {
            setEnemy(response.data)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    const enemyStats = enemy.stats && enemy.stats.map((stat) => {
        let status = []
        status.push(stat.base_stat)
        return status
    })

    const pokeStats = pokeDetails.stats && pokeDetails.stats.map((stat) => {
        let status = []
        status.push(stat.base_stat)
        return status
    })


    const checkStats = (i) => {
        alert(i)
        console.log("p",pokeStats[i])
        console.log("e",enemyStats[i])
        if(enemyStats[i] > pokeStats[i]){
            alert("Perdeu")
        }else if(pokeStats[i] > enemyStats[i]){
            alert("Venceu")
        }else if(pokeStats[i] === enemyStats[i]){
            alert("Empate, escolha outro status ")
        }
    }
    return (
        <div>
            <h1>Batalha</h1>
            <h2>{pokeDetails.name}</h2>
            <p onClick = {() => checkStats(0)} >HP {pokeStats && pokeStats[0]}</p>
            <p onClick = {() => checkStats(1)}>Attack {pokeStats && pokeStats[1]}</p>
            <p onClick = {() => checkStats(2)}>Defense {pokeStats && pokeStats[2]}</p>
            <p onClick = {() => checkStats(3)}>Special Attack{pokeStats && pokeStats[3]}</p>
            <p onClick = {() => checkStats(4)}>Special Defense{pokeStats && pokeStats[4]}</p>
            <p onClick = {() => checkStats(5)}>Speed {pokeStats && pokeStats[5]}</p>

            <h2>{enemy.name}</h2>
            <p onClick = {() => checkStats(0)} >HP {enemyStats && enemyStats[0]}</p>
            <p onClick = {() => checkStats(1)}>Attack {enemyStats && enemyStats[1]}</p>
            <p onClick = {() => checkStats(2)}>Defense {enemyStats && enemyStats[2]}</p>
            <p onClick = {() => checkStats(3)}>Special Attack{enemyStats && enemyStats[3]}</p>
            <p onClick = {() => checkStats(4)}>Special Defense{enemyStats && enemyStats[4]}</p>
            <p onClick = {() => checkStats(5)}>Speed {enemyStats && enemyStats[5]}</p>
        </div>
    )
}

export default ScreenBattle
