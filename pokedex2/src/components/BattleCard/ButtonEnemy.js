import React, { useContext } from 'react'
import { GlobalStateBattle } from '../../global/GlobalStateContext';
import { StatsSpace,StatsDiv } from "./style"

function ButtonEnemy() {  
    const {choiceStats} = useContext(GlobalStateBattle)
    console.log(choiceStats)
    return (
        <StatsSpace>
            {choiceStats.length > 0 && (
                <StatsDiv><h3>{choiceStats[0]}</h3> <h3>{choiceStats[1]}</h3></StatsDiv>
            )}

        </StatsSpace>
    )
}

export default ButtonEnemy