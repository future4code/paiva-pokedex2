import styled from 'styled-components';

export const CardContainer = styled.div `
    height: 30vh;
    width: 200px;
    margin: 10px;
    display: grid;
    grid-template-rows: 85% 15%;
`
export const ImgContainer = styled.div `
background-color:#FFFFD2 ;
display: flex;
justify-content: center;
align-items: center;
`

export const PokeImg = styled.img`
height: 50%;
`

export const ButtonContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
`