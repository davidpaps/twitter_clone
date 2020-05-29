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
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Tweet</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tweets.map((tweet) => (
            <tr>
              <td>{tweet.description}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTweets;
