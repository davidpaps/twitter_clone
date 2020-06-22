import React, { Fragment } from "react";
import AddTweet from "../addTweet/addTweet";
import ListTweets from "../listTweets/listTweets";
import auth from "../auth";

const Twitter = (props) => {
  return (
    <Fragment>
      <h1 className="text-center mt-5">Welcome Back to Twitter</h1>
      <div className="container">
        <AddTweet />
        <ListTweets />
      </div>
      <button
        onClick={() => {
          auth.signOut(() => {
            props.history.push("/");
          });
        }}
        className="btn btn-outline-warning btn-sm mr-xl-5 w-100 h-100"
      >
        De-Authenticate
      </button>
    </Fragment>
  );
};

export default Twitter;
