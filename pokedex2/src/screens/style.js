import styled from "styled-components"
import { cream } from "../constant/colors"
import { spriteSize } from "../constant/spriteSize"



export const AreaPokeCards = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-template-rows: auto;
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

export const Div = styled.main`
    display:flex;
    justify-content: space-between;
    height:100%;
    padding:2rem;
    background-color:${cream} ;
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