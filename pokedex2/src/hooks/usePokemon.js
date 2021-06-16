import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constant/url"

const usePokemon = () => {
    const [pokemon,setPokemon] = useState([{}])

    const getPokemon = () => {
        axios
        .get(`${BASE_URL}?limit=20&offset=0`)
        .then((response) => {
            setPokemon(response.data.results)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return pokemon

}

export default usePokemon
