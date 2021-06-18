import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../constant/url'
import useDetails from '../hooks/useDetails'

function ScreenBattle(props) {
    const [enemy,setEnemy] = useState([{}])
    const [pokeDetails,getPokeDetail] = useDetails()
    const params = useParams()

    useEffect(() => {
        getPokeDetail(params.name)
        getEnemy()
    }, [])

    const getEnemy = () => {
        const pokeNumero = Math.floor(Math.random(1180) * 11);
        console.log(pokeNumero)
        axios
        .get(`${BASE_URL}/${pokeNumero}`)
        .then((response) => {
            setEnemy(response.data)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    console.log(pokeDetails)

    const enemyStats = enemy.stats && enemy.stats.map((stat) => {
        let status = {}
        return status = {[stat.stat.name]:stat.base_stat}
    })

    console.log(enemyStats)
    return (
        <div>
            <h1>Batalha</h1>
            <h2>{pokeDetails.name}</h2>
            <h2>{enemy.name}</h2>
            <button onClick = {enemyStats}>teste</button>
        </div>
    )
}

export default ScreenBattle
