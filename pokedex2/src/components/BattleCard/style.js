import styled from "styled-components"
import { cream, gray, laserLemon, orangeRed } from "../../constant/colors"
import { spriteSize } from "../../constant/spriteSize"

export const CardBattle = styled.div`
    display: grid;
    grid-template-rows: 10% 40% 50% ;

    width: 300px;
    height: 500px;

    background-color:${gray};
    border: 1px solid black;
    border-radius: 2%;

    padding: 1rem 0.5rem;

    img{
        height:${spriteSize};
    }

    h2{
        text-align: center;
    }

`

export const ImageBattle = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    border: solid 1px black;

`

export const StatsDiv = styled.button`
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color:${cream};
    padding:0 1rem;
    height:2rem;
    outline: none;
    border:none;
    margin-bottom: 1rem;

    :hover{
        cursor:pointer;
        color: ${gray};
        background-color: ${orangeRed};

    }
`

export const StatsSpace = styled.div`
    display:grid;
    grid-template-rows: 15% 15% 15% 15% 15%;
    grid-gap: 0.2rem;
    margin-top: 1rem;


`