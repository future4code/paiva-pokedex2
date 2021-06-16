import React, { useState } from 'react'
import useDetails from '../hooks/useDetails'
import usePokemon from '../hooks/usePokemon'

const Pokedex = () => {
    const [pokeDetails] = useDetails()

    const listPokemon = pokeDetails.map((poke) => {
        return  (
            <div>
                <h2>{poke.name}</h2>
                <img src = {poke.sprites.front_default}/>
            </div>

        )

    })
    
    return (
        <div>
            {listPokemon}
        </div>
    )
}

export default Pokedex
