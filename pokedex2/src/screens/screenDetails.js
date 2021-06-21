import React, { useContext, useEffect } from 'react'
import useDetails from '../hooks/useDetails'
import ImageCard from "../components/PokeCard/ImageCard"
import DetailsCard from '../components/PokeCard/detailsCard'
import {CardArea,Div} from "./style"
import loading from "../Image/Loading.gif"
import Header from "../components/header/header"
import { GlobalStateContext } from '../global/GlobalStateContext'

const ScreenDetails = (props) => {
    
    const [pokeDetails,getPokeDetail] = useDetails()
    const {Capitalize} = useContext(GlobalStateContext)
    const pokemon = pokeDetails
    useEffect(() => {
        getPokeDetail(props.name)
    }, [])


    const statsList = pokemon.stats && pokemon.stats.map((stat) => { // Resgata Status
        return(
            <p>{Capitalize(stat.stat.name)}: {stat.base_stat}</p>
        )
    })

    const typeList = pokemon.types && pokemon.types.map((type) => { // Resgata Tipos
        return(
            <p>{Capitalize(type.type.name)}</p>
        )
    })

    const moveList = pokemon.moves && pokemon.moves.slice(0,4).map((move) => { // Resgata 4 Ataques
        return(
            <p>{Capitalize(move.move.name)}</p>
        )
       
    })

    return (
        <backGroundBody>
            <Header
            pagina = "Detalhes"
            h = {props.history}
            name = {pokemon.name}
            pokeImg = {pokemon.sprites && pokemon.sprites.front_default}
            />
            <Div>  

                <h1>{pokemon.name && Capitalize(pokemon.name)}</h1>

                <CardArea imageCard>
                        <ImageCard  img = {pokemon.sprites? (pokemon.sprites.front_default):loading} />
                        <ImageCard  img = {pokemon.sprites? (pokemon.sprites.back_default):loading} />

                </CardArea>

                <CardArea>
                    <DetailsCard
                        titulo = "Stats"
                        content = {statsList}
                    />
                </CardArea>

                <CardArea>
                    <DetailsCard
                        titulo = "Tipos"
                        content = {typeList}
                        detailType = "tipo"
                    />
                    <DetailsCard
                        titulo = "Moves"
                        content = {moveList}
                    />
                </CardArea>
            </Div>

        </backGroundBody>

        
    )
}

export default ScreenDetails