import styled from 'styled-components';
import { spriteSize } from '../../constant/spriteSize';

export const CardContainer = styled.div`
    width: 200px;
    margin: 10px;
    display: grid;
    grid-template-rows: 80% 20%;
`
export const ImgContainer = styled.div(({inPokedex}) =>  `
    background-color: ${inPokedex ? "green":"#FFFFD2"};
    display: grid;
    grid-template-rows: 50% 50%;
    justify-items: center;
    height:50%;
`)

export const PokeImg = styled.img`
    height: ${spriteSize};
    margin:1rem;
`

export const ButtonContainer = styled.div `
    display: flex;
    justify-content: flex-end;
`

export const CardDetails = styled.div`
    padding: 1rem;
    background-color: red;
    margin-bottom: 1rem;
    height:100%;
`

export const ContentDetail = styled.div(({detailType}) =>`
    display:flex;
    flex-direction: ${detailType === "tipo" ? "row":"column"};
`
)

export const PokeName = styled.div`
    width:50%;
`

export const ButtonPokedex = styled.div`
    padding:1rem;
    width:100%;
    display: flex;
    justify-content:space-between ;
`

export const ChangePokedex = styled.button(({inPokedex}) => `
    height:40px;
    width: 40px;
    border-radius: 50%;
    border:${inPokedex ? "red":"green"};
    background-color:white;
    color: ${inPokedex ? "red":"green"};
    font-size: xx-large;
    transition: 0.5s;

    :hover{
        background-color: ${inPokedex ? "red":"green"};
        color:white;
    }
`)

export const DetailsButton = styled.button`
    height:60%;
    width: 50%;
    border:1px solid black;
    border-radius: 5%;
    background:none;
    font-size: medium;

    :hover{
        cursor:pointer
    }

`