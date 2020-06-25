import React, { Fragment, useEffect, useState } from "react";
import EditTweet from "../editTweet/editTweet";

const ListTweets = (props) => {
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
  }, [tweets.tweet_id, tweets.description, tweets.user_fk_id]);

  return (
    <Fragment>
      {console.log(tweets)}
      {console.log(props.users)}
      <h1 className="text-center mt-5"> Tweets:</h1>
      {tweets.map((tweet) => (
        <div className="card" key={tweet.tweet_id}>
          <div className="card-body">
            <h4 className="card-title">{props.username}</h4>
            <p className="card-text">{tweet.description}</p>
            <EditTweet tweet={tweet} />
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
