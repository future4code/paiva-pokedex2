
// import './App.css';
import { createGlobalStyle } from 'styled-components';
import Routes from "./router/Routes"
import GlobalState from './global/GlobalState';


const GlobalStyle = createGlobalStyle`     * {     padding: 0;     margin: 0;     box-sizing: border-box;     }`



function App() {
  return (

    <GlobalState >
      <GlobalStyle />
      <Routes/>
    </GlobalState>
  );
}


export default App;
