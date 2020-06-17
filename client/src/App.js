import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUp";
import Twitter from "./components/twitter/twitter";
import Navigation from "./components/navigation/navigation";
import Error from "./components/error/error";
import Home from "./components/home/home";
import SignOut from "./components/signOut/signOut";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sign_in" component={SignIn} exact />
            <Route path="/sign_up" component={SignUp} exact />
            <Route path="/sign_out" component={SignOut} exact />
            <Route path="/home" component={Twitter} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
