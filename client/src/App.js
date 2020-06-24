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
        <Navigation auth={auth} />
        <div className="container">
          <ul>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route
                exact
                path="/sign_in"
                render={(props) => <SignIn {...props} auth={setAuth} />}
              />
              <Route
                exact
                path="/sign_up"
                render={(props) => <SignUp {...props} auth={setAuth} />}
              />
              <Route exact path="/sign_out">
                <SignOut />
              </Route>
              <PrivateRoute exact path="/home" component={Twitter} />
              <Route>
                <Error />
              </Route>
            </Switch>
          </ul>
        </div>
      </Router>
    </Fragment>
  );
};

export default App;
