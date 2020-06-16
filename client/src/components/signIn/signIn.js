import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SignUp from "../signUp/signUp";

const SignIn = () => {
  return (
    <Fragment>
      <h1 className="text-center mt-5">Welcome to Twitter</h1>
      <form className="d-flex mt-5">
        <input className="form-control" type="email" required />
        <input className="form-control" type="password" required />
        <Link to="/">
          <button className="btn btn-outline-success btn-sm mr-xl-5 w-100 h-100">
            Sign-In!
          </button>
        </Link>
      </form>
    </Fragment>
  );
};

export default SignIn;
