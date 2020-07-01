import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "../components/home/signIn/signIn";
import SignUp from "../components/home/signUp/signUp";
import Twitter from "../components/twitter/twitter";
import Navigation from "../components/navigation/navigation";
import Error from "../components/error/error";
import Home from "../components/home/home";
import SignOut from "../components/navigation/signOut/signOut";
import PrivateRoute from "../components/privateRoute/privateRoute";

const App = () => {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <Fragment>
      <Router>
        <Navigation auth={auth} username={username} />
        <div className="container">
          <ul>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route
                exact
                path="/sign_in"
                render={(props) => (
                  <SignIn {...props} auth={setAuth} username={setUsername} />
                )}
              />
              <Route
                exact
                path="/sign_up"
                render={(props) => (
                  <SignUp {...props} auth={setAuth} username={setUsername} />
                )}
              />
              <Route exact path="/sign_out">
                <SignOut />
              </Route>
              <PrivateRoute
                exact
                path="/home"
                component={Twitter}
                username={username}
                auth={auth}
                setAuth={setAuth}
              />
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
