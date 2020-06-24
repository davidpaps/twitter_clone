import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <Fragment>
      <h1 className="text-center mt-5">Welcome to Twitter!</h1>
      <Link to="/sign_up">
        <button className="btn btn-outline-success btn-sm mr-xl-5 w-100 h-100">
          New User? Create an Account!
        </button>
      </Link>
      <br></br>
      <br></br>
      <Link to="/sign_in">
        <button className="btn btn-outline-info btn-sm mr-xl-5 w-100 h-100">
          Already Have an Account? Click Here to Sign In!
        </button>
      </Link>
    </Fragment>
  );
};

export default home;
