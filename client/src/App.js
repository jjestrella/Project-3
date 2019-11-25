/* eslint-disable react/prefer-stateless-function */
import React from "react";
import User from "./utils/Stores/User";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <User.Provider>
        <Routes />
      </User.Provider>
    </BrowserRouter>
  );
}

export default App;

