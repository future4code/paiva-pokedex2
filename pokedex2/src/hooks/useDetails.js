import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constance/url"

const useDetails = () => {
    const [details,setDetails] = useState([{}])

    const getPokeDetail = (name) => {
        console.log(BASE_URL + "/" + name)
        axios
        .get(`${BASE_URL}/${name}`)
        .then((response) => {
            // setDetails(response.data.sprites.front_default)
            console.log(response.data.name)
        })
        .catch((err) => {
            alert(err)
        })
    }

    return [details,getPokeDetail]

}

export default useDetails
