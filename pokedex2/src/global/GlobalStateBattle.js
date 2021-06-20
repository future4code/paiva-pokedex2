import React,{ useState,useEffect } from 'react'
import {BASE_URL} from "../constant/url"
import useDetails from "../hooks/useDetails"
import axios from "axios"
import { GlobalStateBattle } from "./GlobalStateContext"

const GlobalBattle = (props) =>{
    const [enemy,setEnemy] = useState([{}])
    const [pokeDetails,getPokeDetail] = useDetails()

    const [enemyPoints,setEnemyPoints] = useState(0)
    const [playerPoints,setPlayerPoints] = useState(0)
    const [rounds,setRounds] = useState(0)
    const [choiceStats,setChoiceStats] = useState ({})

    const [choiceMade,setChoiceMade] = useState(false)
    const [response,setResponse] = useState("")

    useEffect(() => {
        setChoiceStats([])
        setChoiceMade(false)
        setResponse("")
        const pokeJogador = Math.floor(Math.random() * 898) +1;
        getPokeDetail(pokeJogador)
        getEnemy()
    }, [rounds])

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

    const pokeStats = pokeDetails.stats && pokeDetails.stats.map((stat) => {
        let status = []
        status.push(stat.base_stat)
        return status
    })

    const enemyStats = enemy.stats && enemy.stats.map((stat) => {
        let status = []
        status.push(stat.base_stat)
        return status
    })

    const checkStats = (i,label) => {

        setChoiceStats([label,enemyStats[i]])
        setChoiceMade(true)

        const enemy = parseInt(enemyStats[i])
        const player = parseInt(pokeStats[i])

        if(enemy > player){
            setResponse("Você perdeu a rodada")
            return setEnemyPoints(enemyPoints + 1)

        }else if(player > enemy){
            setResponse("Você venceu a rodada")
            return setPlayerPoints(playerPoints +1)
        
        }else if(player === enemy){
            return setResponse("Rodada Empatada")
        }

    }

    const changeRound = () => {
        if(response != "Rodada Empatada"){
            return setRounds(rounds + 1)
        }else{
            setRounds(rounds)
        }
    }

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
        }   

    console.log(enemyStats)
    return (
        <GlobalStateBattle.Provider value={{playerPoints,response,choiceMade,enemyPoints,rounds,pokeDetails,enemy,
                                            pokeStats,choiceStats,checkStats,changeRound,Capitalize }} >
            {props.children}
        </GlobalStateBattle.Provider>
    )

}

export default GlobalBattle