import React, { Fragment, Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./components/signIn/signIn";
import Home from "./components/home/home";
import Navigation from "./components/navigation";

function App() {
  return (
    // <Fragment>
    //   <div className="container">
    //     <SignIn />
    //     <Home />
    //   </div>
    // </Fragment>
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/sign_in" component={SignIn} exact />
          <Route path="/" component={Home} />
          {/* <Route path="/contact" component={Contact}/>
        <Route component={Error}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
