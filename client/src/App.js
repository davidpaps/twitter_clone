import React, { Fragment, Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUp";
import Home from "./components/home/home";
import Navigation from "./components/navigation";
import Error from "./components/error";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/sign_in" component={SignIn} exact />
            <Route path="/sign_up" component={SignUp} exact />
            <Route path="/home" component={Home} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
