import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../auth/auth";
import Prompt from "../prompt/prompt";

const SignIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(0);

  const onSubmitForm = async (event) => {
    event.preventDefault();

    const body = { username: username, password: password };
    const response = await fetch(`http://localhost:5000/users/${username}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    let validate = await response.json().then((data) => data);
    if (validate === true) {
      auth.signIn(() => {
        props.history.push("/home");
      });
      props.auth(true);
      props.username(username);
    } else {
      setMessage(1);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Sign in to Twitter!</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Black_Man_Getting_an_Idea_Cartoon_Vector.svg/1200px-Black_Man_Getting_an_Idea_Cartoon_Vector.svg.png"
        height="50%"
        width="50%"
      />
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          className="form-control"
          type="text"
          required
          placeholder="Enter Your Twitter username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="form-control"
          type="password"
          required
          placeholder="Enter Your Secure Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="btn btn-outline-success btn-sm mr-xl-5 w-100 h-100">
          Sign-In!
        </button>
      </form>
      <br></br>
      <Link to="/sign_up">
        <button className="btn btn-outline-info btn-sm mr-xl-5 w-100 h-100">
          Click Here to Sign Up to Twitter!
        </button>
      </Link>
      <Prompt message={message} />
    </Fragment>
  );
};

export default SignIn;
