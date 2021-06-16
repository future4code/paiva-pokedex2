import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constant/url"
import usePokemon from "./usePokemon"

const useDetails = () => {
    const [pokeDetails,setPokeDetails] = useState([])
    const pokemon = usePokemon()
    
    const getPokeDetail = (name) => {
        const detailList = []

        name.forEach((poke) => {

            if(poke.name){

                axios
                .get(`${BASE_URL}/${poke.name}`)
                .then((response) => {
                    detailList.push(response.data)
                    if(detailList.length === 20){
                        const pokeOrder = detailList.sort((a,b) => {
                            return a.id - b.id
                        })
                        setPokeDetails(pokeOrder)
                    }
                })
                .catch((err) => {
                    alert(err.message)
                })
            }
        })
    }

    useEffect(() => {
        getPokeDetail(pokemon)


    }, [pokemon])

    return [pokeDetails]

}

export default useDetails
