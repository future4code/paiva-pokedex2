import styled from 'styled-components';
import { dodgerBlue, gray, laserLemon, orangeRed, } from '../../constant/colors';
import { spriteSize } from '../../constant/spriteSize';

export const CardContainer = styled.div`
    width: 200px;
    margin: 10px;
    display: grid;
    grid-template-rows: 80% 20%;
    background-color: ${gray};
    box-shadow: 0px 0px 5px ${dodgerBlue};
`
export const ImgContainer = styled.div(({inPokedex}) =>  `
    background-color: ${inPokedex ? gray:gray};
    display: grid;
    grid-template-rows: 50% 50%;
    justify-items: center;
    height:50%;
`)

export const PokeImg = styled.img`
    height: ${spriteSize};
    margin:1rem;
    background-color:${gray};
`

export const ButtonContainer = styled.div `
    display: flex;
    justify-content:space-between;
    
`

export const CardDetails = styled.div`
    padding: 1rem;
    background-color: ${gray};
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
    justify-content:center ;
`

export const ChangePokedex = styled.button(({inPokedex}) => `
    height:100%;
    width: 50%;
    border-radius: 5%;
    border:${inPokedex ? "red":"green"};
    border: 1px solid black;
    background-color:${gray};


    :hover{
        background-color: ${inPokedex ? orangeRed:"green"};
        color:white;
        transition: 0.5s;
        cursor:pointer;
    }
`)

export const DetailsButton = styled.button`
    height:100%;
    width: 50%;
    border:1px solid black;
    border-radius: 5%;
    background:${gray};
    font-size: medium;

    :hover{
        background-color:${laserLemon};
        cursor:pointer;
        transition: 0.5s;
    }

`