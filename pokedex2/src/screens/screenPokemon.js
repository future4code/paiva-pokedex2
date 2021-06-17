import React, { useContext } from 'react'
import { GlobalStateContext } from '../global/GlobalStateContext';
import PokeCard from '../components/PokeCard/PokeCard';
import RenderPagination from '../components/Pagination/Pagination';

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

    return (
        <div>
            {listPokemon.length ? listPokemon : "Carregando"}   
            <RenderPagination/>
        </div>
    )
}

export default ScreenPokemon
