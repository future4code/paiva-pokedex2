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

    @media only screen and (max-width: 480px) {
        width: 200px;
        height:auto;
        padding:0 0.5rem;
        grid-template-rows: 20% 65% 15%;
        padding:1rem 0.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

`

export const ImageBattle = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    border: solid 1px black;

    @media only screen and (max-width: 480px) {
        align-items: center;
    }

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

    
    @media only screen and (max-width: 480px) {
        height: 20px;
        align-items: flex-end;
        margin-bottom: 0;
        
    }

`

export const StatsSpace = styled.div`
    display:grid;
    grid-template-rows: 15% 15% 15% 15% 15%;
    grid-gap: 0.2rem;
    margin-top: 1rem;

    
    @media only screen and (max-width: 480px) {
        grid-template-rows: 10% 10% 10% 10% 10%;
        margin-top: 0;
        display:flex;
        flex-direction: column;
    }


`