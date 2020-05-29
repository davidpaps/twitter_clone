import React, { Fragment } from "react";
import AddTweet from "../addTweet/addTweet";

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <AddTweet />
      </div>
    </Fragment>
  );
};

export default Home;
