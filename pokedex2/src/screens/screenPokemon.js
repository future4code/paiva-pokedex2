import React, { useContext } from 'react'
import { GlobalStateContext } from '../global/GlobalStateContext';
import PokeCard from '../components/PokeCard/PokeCard';
import RenderPagination from '../components/Pagination/Pagination';
import {AreaPokeCards,PaginationArea,ImageLoading} from "./style"
import loading from "../Image/Loading.gif"

const ScreenPokemon = (props) => {
    const {pokeDetails} = useContext(GlobalStateContext)

    const listPokemon = pokeDetails.map((poke) => {
        return  (
            
            <div>
                <PokeCard
                key={poke.name}
                name = {poke.name}
                pokeImg = {poke.sprites.front_default}
                />
            </div>
        )
    })

    if(!listPokemon.length){
        return(
            <div>
                <ImageLoading src = {loading} />
            </div>
        )
    }

    return (
        <div>
        <AreaPokeCards>
            {listPokemon}  
        </AreaPokeCards>

        <PaginationArea>
            <RenderPagination/>
        </PaginationArea>

        </div>


    )
}

export default ScreenPokemon
