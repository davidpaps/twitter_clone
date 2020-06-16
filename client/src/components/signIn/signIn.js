import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Fragment>
      <h1 className="text-center mt-5">Welcome to Twitter</h1>
      <form className="d-flex mt-5">
        <input className="form-control" type="email" />
        <input className="form-control" type="password" />
        <Link to="/">
          <button className="btn btn-success">Sign In!</button>
        </Link>
      </form>
    </Fragment>
  );
};

export default SignIn;
