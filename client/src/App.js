import React, { Fragment, Component } from "react";
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
import { AuthContext } from "./components/context/useAuth";

const App = (props) => {
  return (
    <AuthContext.Provider value={false}>
      <Fragment>
        <Router>
          <Navigation />
          <div className="container">
            <ul>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/sign_in" component={SignIn} exact />
                <Route path="/sign_up" component={SignUp} exact />
                <Route path="/sign_out" component={SignOut} exact />
                <PrivateRoute path="/home" component={Twitter} />
                <Route component={Error} />
              </Switch>
            </ul>
          </div>
        </Router>
      </Fragment>
    </AuthContext.Provider>
  );
};

export default App;
