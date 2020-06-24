import React, { Fragment, useState, useEffect } from "react";
import AddTweet from "../addTweet/addTweet";
import ListTweets from "../listTweets/listTweets";

const Twitter = (props) => {
  const [users, setUsers] = useState("");

  const getUsers = async () => {
    const response = await fetch("http://localhost:5000/users");
    const jsonData = await response.json();

    setUsers(jsonData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <h1 className="text-center mt-5">
        {props.username}, Welcome Back to Twitter!
      </h1>
      <div className="container">
        <AddTweet />
        <ListTweets username={props.username} users={users} />
      </div>
    </Fragment>
  );
};

export default Twitter;
