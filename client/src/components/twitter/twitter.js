import React, { Fragment, useState, useEffect } from "react";
import AddTweet from "./addTweet/addTweet";
import ListTweets from "./listTweets/listTweets";

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
    <div>
      {users && (
        <Fragment>
          <h1 className="text-center mt-5">Welcome to Twitter!</h1>
          <div className="container">
            <AddTweet
              users={users}
              username={props.username}
              auth={props.auth}
              setRender={setRender}
              userId={getUserId()}
            />
            <ListTweets
              username={props.username}
              users={users}
              render={render}
              setRender={setRender}
              userId={getUserId()}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Twitter;
