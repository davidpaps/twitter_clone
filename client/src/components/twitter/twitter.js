import React, { Fragment } from "react";
import AddTweet from "../addTweet/addTweet";
import ListTweets from "../listTweets/listTweets";

const Twitter = (props) => {
  return (
    <Fragment>
      <h1 className="text-center mt-5">Welcome Back to Twitter</h1>
      <div className="container">
        <AddTweet />
        <ListTweets username={props.username} />
      </div>
    </Fragment>
  );
};

export default Twitter;
