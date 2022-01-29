import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom" 

import { Provider as AuthProvider } from "./Context/Authenticated"
import { Provider as LangProvider } from "./Context/Localization"
import { Provider as ThemeProvider } from "./Context/Theme"

import "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LangProvider>
        <ThemeProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ThemeProvider>
      </LangProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);