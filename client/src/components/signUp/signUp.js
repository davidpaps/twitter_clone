import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Fragment>
      <h1 className="text-center mt-5">Twitter Sign Up</h1>
      <form className="d-flex mt-5">
        <input
          className="form-control"
          type="text"
          required
          placeholder="Enter a Username"
        />
        <input
          className="form-control"
          type="email"
          required
          placeholder="Enter a Valid Email Address"
        />
        <input
          className="form-control"
          type="password"
          required
          placeholder="Enter a Secure Password"
        />
        <Link to="/home">
          <button className="btn btn-outline-success btn-sm mr-xl-5 w-100 h-100">
            Create Account!
          </button>
        </Link>
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
