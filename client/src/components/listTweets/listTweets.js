import React, { Fragment, useEffect, useState } from "react";

const ListTweets = () => {
  const [tweets, setTweets] = useState([]);

  const getTweets = async () => {
    const response = await fetch("http://localhost:5000/tweets");
    const jsonData = await response.json();

    setTweets(jsonData);
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <Fragment>
      <h1 className="text-center mt-5">List Tweets</h1>
      {tweets.map((tweet) => (
        <div className="card" key={tweet.tweet_id}>
          <div className="card-body">
            <h4 className="card-title">Tweet Number {tweet.tweet_id}</h4>
            <p className="card-text">{tweet.description}</p>
            <a href="#edit" className="btn sm btn-success">
              Edit
            </a>
            <a href="#delete" className="sm btn btn-danger m-1">
              Delete
            </a>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default ListTweets;
