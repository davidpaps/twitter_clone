import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../auth/auth";
import Prompt from "../../prompt/prompt";
import classes from "./signUp.module.css";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(0);

  const onSubmitForm = async (event) => {
    event.preventDefault();

    const body = { email: email, username: username, password: password };
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    let validate = await response.json().then((data) => data);
    if (validate === "Error") {
      setMessage(2);
    } else {
      auth.signIn(() => {
        props.history.push("/home");
      });
      props.auth(true);
      props.username(username);
    }
  };

  return (
    <div className={classes.SignUp}>
      <h1 className="text-center mt-5">Sign Up to Twitter!</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Man_Getting_an_Idea_Cartoon_Vector.svg/1200px-Man_Getting_an_Idea_Cartoon_Vector.svg.png"
        alt=""
      />
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
      <Prompt message={message} />
    </div>
  );
};

export default SignUp;
