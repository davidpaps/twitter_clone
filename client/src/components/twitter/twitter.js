import React, { Fragment, useState, useEffect } from "react";
import AddTweet from "./addTweet/addTweet";
import ListTweets from "./listTweets/listTweets";
import classes from "./twitter.module.css";

const Twitter = (props) => {
  const [users, setUsers] = useState("");
  const [render, setRender] = useState(false);

  const getUsers = async () => {
    const response = await fetch("http://localhost:5000/users");
    const jsonData = await response.json();

    setUsers(jsonData.reverse());
  };

  const getUserId = () => {
    return users.filter((user) => user.username === props.username)[0].user_id;
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={classes.Twitter}>
      <img
        src="https://webstockreview.net/images/lightbulb-clipart-self-realization-7.gif"
        alt=""
      />

      {users && (
        <div>
          <div className={classes.title}>
            <br></br>
          </div>

          <div>
            <AddTweet
              users={users}
              username={props.username}
              auth={props.auth}
              setRender={setRender}
              userId={getUserId()}
            />
            <br></br>
            <ListTweets
              username={props.username}
              users={users}
              render={render}
              setRender={setRender}
              userId={getUserId()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Twitter;
