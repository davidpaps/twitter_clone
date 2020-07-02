import React, { useEffect, useState } from "react";
import EditTweet from "./editTweet/editTweet";
import Prompt from "../../prompt/prompt";
import classes from "./listTweets.module.css";

const ListTweets = (props) => {
  const [tweets, setTweets] = useState([]);
  const [message, setMessage] = useState(0);

  const deleteTweets = async (tweet_id, tweet_user_id) => {
    if (props.userId === tweet_user_id) {
      const deleteTweet = await fetch(
        `http://localhost:5000/tweets/${tweet_id}`,
        {
          method: "DELETE",
        }
      );
      setTweets(tweets.filter((tweet) => tweet.tweet_id !== tweet_id));
    } else {
      setMessage(3);
    }
  };

  const getTweets = async () => {
    const response = await fetch("http://localhost:5000/tweets");
    const jsonData = await response.json();

    setTweets(jsonData.reverse());
    props.setRender(false);
    setMessage(0);
  };

  useEffect(() => {
    getTweets();
  }, [props.render]);

  return (
    <div className={classes.ListTweets}>
      <Prompt message={message} />
      <h1 className="text-center mt-5"> {props.username}'s Feed:</h1>
      {tweets.reverse().map((tweet) => (
        <div className="card" key={tweet.tweet_id}>
          <div className="card-body">
            <h4 className="card-title">
              {
                props.users.filter(
                  (user) => user.user_id === tweet.user_fk_id
                )[0].username
              }
            </h4>
            <p className="card-text">{tweet.description}</p>
            <EditTweet
              tweet={tweet}
              setRender={props.setRender}
              userId={props.userId}
            />
            <button
              className="btn btn-outline-danger btn-sm m-1"
              onClick={() => deleteTweets(tweet.tweet_id, tweet.user_fk_id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTweets;
