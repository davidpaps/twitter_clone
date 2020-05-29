import React, { Fragment, useState } from "react";

const AddTweet = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (event) => {
    event.preventDefault();

    const body = { description };
    const response = await fetch("http://localhost:5000/tweets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    window.location = "/";
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Add a Tweet</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default AddTweet;
