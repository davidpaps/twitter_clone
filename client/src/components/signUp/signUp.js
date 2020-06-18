import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (event) => {
    event.preventDefault();

    const body = { email: email, username: username, password: password };
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    window.location = "/home";
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Twitter Sign Up</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          className="form-control"
          type="text"
          required
          placeholder="Enter a Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="form-control"
          type="email"
          required
          placeholder="Enter a Valid Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="form-control"
          type="password"
          required
          placeholder="Enter a Secure Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="btn btn-outline-success btn-sm mr-xl-5 w-100 h-150">
          Create Account!
        </button>
      </form>
      <br></br>
      <Link to="/sign_in">
        <button className="btn btn-outline-info btn-sm mr-xl-5 w-100 h-100">
          Already Have an Account? Click Here to Sign In!
        </button>
      </Link>
    </Fragment>
  );
};

export default SignUp;
