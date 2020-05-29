import React, { Fragment } from "react";
import "./App.css";
import SignIn from "./components/signIn/signIn";
import Home from "./components/home/home";

function App() {
  return (
    <Fragment>
      <div className="container">
        <SignIn />
        <Home />
      </div>
    </Fragment>
  );
}

export default App;
