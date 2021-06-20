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
        //Reseta funções
        setChoiceStats([])
        setChoiceMade(false)
        setResponse("")
        //Cria Pokémon
        const pokeJogador = Math.floor(Math.random() * 898) +1; //Gera um número aleatório para criar personagem do jogador
        getPokeDetail(pokeJogador)
        getEnemy()
        //Termina o jogo
        endGame()
    }, [rounds])

    const getEnemy = () => { //Cria a carta inimiga
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

    const pokeStats = pokeDetails.stats && pokeDetails.stats.map((stat) => { // Resgata status do pokémon do jogador
        let status = []
        status.push(stat.base_stat)
        return status
    })

    const enemyStats = enemy.stats && enemy.stats.map((stat) => {  //Resgata status do inimigo 
        let status = []
        status.push(stat.base_stat)
        return status
    })

    const checkStats = (i,label) => { //Verifica status escolhido pelo jogador para competir

        setChoiceStats([label,enemyStats[i]]) //Separa a escolha do jogador para exibir a do inimigo
        setChoiceMade(true) //O controlador de escolha recebe true

        const enemy = parseInt(enemyStats[i])
        const player = parseInt(pokeStats[i])

        if(enemy > player){ //Caso perca
            setResponse("Você perdeu a rodada")
            return setEnemyPoints(enemyPoints + 1)

        }else if(player > enemy){ //Caso ganhe
            setResponse("Você venceu a rodada")
            return setPlayerPoints(playerPoints +1)
        
        }else if(player === enemy){ //Caso de empate
            return setResponse("Rodada Empatada")
        }

    }

    const changeRound = () => { // Troca o round que controla o userEffect de cartas
        return setRounds(rounds + 1)
    }
    
    const endGame = () => {  // Termina o jogo
        if(rounds > 10){   

            setPlayerPoints(0)
            setEnemyPoints(0)
            setRounds(0)
    
            if(playerPoints > enemyPoints){
                alert("As 10 rodadas aconteceram e Você venceu!! Espero que tenha gostado")
            }else{
                alert("As 10 rodadas passaram e infelizmente você perdeu :(")
            }
    
        }

    }

    const Capitalize = (str) => { //Torna a primeira letra em maiusculo 
        return str.charAt(0).toUpperCase() + str.slice(1);
        }   
    return (
        <GlobalStateBattle.Provider value={{playerPoints,response,choiceMade,enemyPoints,rounds,pokeDetails,enemy,
                                            pokeStats,choiceStats,checkStats,changeRound,Capitalize }} >
            {props.children}
        </GlobalStateBattle.Provider>
    )

}

export default GlobalBattle