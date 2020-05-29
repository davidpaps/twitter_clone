import React, { Fragment, useEffect, useState } from "react";

const ListTweets = () => {
  const [tweets, setTweets] = useState([]);

  const deleteTweets = async (id) => {
    const deleteTweet = await fetch(`http://localhost:5000/tweets/${id}`, {
      method: "DELETE",
    });
    setTweets(tweets.filter((tweet) => tweet.tweet_id !== id));
  };

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
            <a href="#edit" className="btn btn-outline-success btn-sm">
              Edit
            </a>
            <button
              className="btn btn-outline-danger btn-sm m-1"
              onClick={() => deleteTweets(tweet.tweet_id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default ListTweets;
