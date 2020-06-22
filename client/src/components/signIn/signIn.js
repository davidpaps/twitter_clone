import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../auth";

const SignIn = (props) => {
  return (
    <Fragment>
      <h1 className="text-center mt-5">Welcome to Twitter</h1>
      <form className="d-flex mt-5">
        <input
          className="form-control"
          type="text"
          required
          placeholder="Enter Your Twitter username"
        />
        <input
          className="form-control"
          type="password"
          required
          placeholder="Enter Your Secure Password"
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
    </Fragment>
  );
};

export default SignIn;
