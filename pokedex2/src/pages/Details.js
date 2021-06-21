
import React from 'react'
import { useHistory,useParams } from "react-router-dom";
import ScreenDetails from '../screens/screenDetails';



const Details = () => {
    const history = useHistory();
    const params = useParams()
    return (
        <div>
            <ScreenDetails
            name = {params.name}
            history = {history}
            />
        </div>
    )
}

export default Details

