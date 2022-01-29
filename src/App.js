import './App.css';
import React from 'react';

import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

import { Context } from "./Context/Authenticated"

function App() {
  const { token } = React.useContext(Context);

  
  if (token) {
    return <AuthenticatedApp/>
  } else {
    return <UnauthenticatedApp/>
  }
}

export default App;
