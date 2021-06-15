import React from 'react'
import useDetails from '../hooks/useDetails'
import usePokemon from '../hooks/usePokemon'

const Pokedex = () => {
    const [details,getPokeDetail] = useDetails()

    const pokemon = usePokemon()

    console.log(pokemon)

    // const listPokemon = pokemon.map((poke) => {
    //     return(
    //         <div>
    //             <h2>{poke}</h2>
    //         </div>
    //     )
    // })
    
    return (
        <div>
            {/* {listPokemon} */}
        </div>
    )
}

export default Pokedex
