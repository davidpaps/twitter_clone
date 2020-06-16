import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Fragment>
      <h1 className="text-center mt-5">Twitter Sign Up</h1>
      <form className="d-flex mt-5">
        <input className="form-control" type="email" required />
        <input className="form-control" type="password" required />
        <Link to="/">
          <button className="btn btn-outline-success btn-sm mr-xl-5 w-100 h-100">
            Create Account!
          </button>
        </Link>
      </form>
    </Fragment>
  );
};

export default SignUp;
