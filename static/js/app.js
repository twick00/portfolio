import React from "react";
import ReactDOM from "react-dom";
import PortfolioHomePage from "./react/pages/PortfolioHomePage";


const App = () => {
  return(
    <PortfolioHomePage/>
  )
};

const root = document.getElementById("root");
ReactDOM.render(<App/>, root);