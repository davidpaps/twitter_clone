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
    window.location = "/home";
  };

  return (
    <Fragment>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          required
          type="text"
          className="form-control"
          value={description}
          placeholder="Add a Tweet!"
          onChange={(event) => setDescription(event.target.value)}
        />
        <button className="btn btn-outline-success btn-sm">Add</button>
      </form>
    </Fragment>
  );
};

export default AddTweet;
