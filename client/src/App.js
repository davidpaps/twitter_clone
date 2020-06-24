import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUp";
import Twitter from "./components/twitter/twitter";
import Navigation from "./components/navigation/navigation";
import Error from "./components/error/error";
import Home from "./components/home/home";
import SignOut from "./components/signOut/signOut";
import PrivateRoute from "./components/privateRoute";

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Fragment>
      <Router>
        <Navigation />
        <div className="container">
          <ul>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/sign_in" component={SignIn} />
              <Route exact path="/sign_up" component={SignUp} />
              <Route exact path="/sign_out" component={SignOut} />
              <PrivateRoute exact path="/home" component={Twitter} />
              <Route component={Error} />
            </Switch>
          </ul>
        </div>
      </Router>
    </Fragment>
  );
};

export default App;
