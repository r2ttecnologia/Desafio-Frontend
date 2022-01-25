import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
}
::-webkit-scrollbar-thumb:vertical {
    background-color: #EC164F;
    height: 20px;
    border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
}

::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    background: white;
}F
`