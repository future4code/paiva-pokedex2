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
` 
export const LeftHeader = styled.button`
  position: absolute;
  left: 1em;
`;

export const LeftHeader2 = styled.button`
  position: absolute;
  left: 9em;
`;

export const RightButton = styled.button`
  position: absolute;
  right: 1em;
`;
