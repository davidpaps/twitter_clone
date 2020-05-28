import React, { Fragment } from "react";
import "./App.css";
import SignIn from "./components/signIn/signIn";
import AddTweet from "./components/addTweet/addTweet";

function App() {
  return (
    <Fragment>
      <div className="container">
        <SignIn />
        <AddTweet />
      </div>
    </Fragment>
  );
}

export default App;
