
// import './App.css';
import { createGlobalStyle } from 'styled-components';
import Routes from "./router/Routes"


const GlobalStyle = createGlobalStyle`     * {     padding: 0;     margin: 0;     box-sizing: border-box;     }`

function App() {
 
  return (
    <div >
      <GlobalStyle />
      <Routes/>
    </div>
  );
}


export default App;
