import styled from "styled-components"
import {  orangeRed,} from "../../constant/colors"

export const HeaderArea = styled.div`
height: 4em;
background-color: ${orangeRed};
display: flex;
align-items:center;
justify-content: center;
color: white;
position: relative;
@media only screen and (max-width: 600px) {
    flex-direction:column-reverse
  }

` 
export const LeftHeader = styled.button`
  position: absolute;
  left: 1em;
  @media only screen and (max-width: 600px) {
    position: static;
    display: flex;
   
  }
`;

export const LeftHeader2 = styled.button`
  position: absolute;
  left: 9em;
  @media only screen and (max-width: 600px) {
    position: static;
    display: flex;
    
  }
`;

export const RightButton = styled.button`
  position: absolute;
  right: 1em;
`;
