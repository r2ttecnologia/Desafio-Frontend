import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './styles/globalStyle';
import AppRoutes from "./routes"

ReactDOM.render(
    <>
     <AppRoutes />
     <GlobalStyle />
    </>,
     document.getElementById('root'));