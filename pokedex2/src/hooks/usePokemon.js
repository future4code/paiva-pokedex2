import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constance/url"

const usePokemon = () => {
    const [pokemon,setPokemon] = useState([{}])

    const getPokemon = () => {
        console.log(`${BASE_URL}?limit=0&offset=20`)
        axios
        .get(BASE_URL)
        .then((response) => {
            setPokemon(response.data.response)
            console.log(pokemon)
        })
        .catch((err) => {
            alert(err)
        })
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return pokemon

}

export default usePokemon
