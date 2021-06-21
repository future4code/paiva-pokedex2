import styled from "styled-components"
import { cream } from "../constant/colors"
import { spriteSize } from "../constant/spriteSize"

export const AreaPokeCards = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-template-rows: auto;

    @media only screen and (max-width: 480px) {
        display:flex;
        flex-direction: column;
    }
`

export const AreaCard = styled.div`
    display:grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-template-rows: auto;
`

export const CardArea = styled.div`
    width:${props => props.imageCard ? "20%": "30%"};
    height:100%;
`

export const Div = styled.div`
    display:flex;
    justify-content: space-between;
    height:100%;
    padding:2rem;
    background-color:${cream} ;
    align-items: center;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const ImageLoading = styled.img`
    height: ${spriteSize};
`

export const PaginationArea = styled.div`
    display:flex;
    flex-wrap: wrap;
    width:50vw;

    button{
        color:red;
        background: none;
        border: none;
        font-size: x-large;
        margin-right:1rem;

        :hover{
            color:blue;
            cursor:pointer;
            top: 1rem;
        }
    }

`
export const backGroundBody = styled.main`
background-color: ${cream};
`

export const BattleArena = styled.div`
    height:50vh;
    display:flex;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width: 480px) {
        flex-direction: column-reverse;
    }
`

export const Rounds = styled.div`
    display:flex;
    justify-content: center;
    margin:1rem;
`

export const Board = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align:center;

`

export const Scores = styled.div`
    display:flex;
    text-align:center;
    justify-content: center;

`

export const Score = styled.h3`
    margin-right:1rem;

`

export const BattleArea = styled.div`
    display:grid;
    grid-template-rows: 50% 50%;
`