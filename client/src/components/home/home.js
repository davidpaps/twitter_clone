import React, { Fragment } from "react";
import AddTweet from "../addTweet/addTweet";
import ListTweets from "../listTweets/listTweets";

const Home = () => {
  return (
    <Fragment>
      <h1 className="text-center mt-5">Home - Twitter</h1>
      <div className="container">
        <AddTweet />
        <ListTweets />
      </div>
    </Fragment>
  );
};

export default Home;
