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
    <Fragment>
      <div className={classes.Title}>
        HELLO
        <img
          src="https://blogs.loc.gov/loc/files/2010/04/twitter_logo.jpg"
          alt=""
        ></img>
      </div>

      <div className={classes.Twitter}>
        <img
          src="https://webstockreview.net/images/lightbulb-clipart-self-realization-7.gif"
          alt=""
        />

        {users && (
          <div>
            <div>
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
    </Fragment>
  );
};

export default Twitter;
