/* eslint-disable react/prefer-stateless-function */
import React from "react";
import User from "./utils/Stores/User";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import 
  ButtonAppBar
 from "./components/ButtonAppBar/ButtonAppBar";

function App() {
  return (
    <BrowserRouter>
      <User.Provider>
        <ButtonAppBar />
        <Routes />
      </User.Provider>
    </BrowserRouter>
  );
}

export default App;

