import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SignOut = () => {
  return (
    <Fragment>
      <div>
        <h1 className="text-center mt-5">
          You Have Been Signed out of Twitter, See you Again Soon!
        </h1>
      </div>
      <Link to="/sign_in">
        <button className="btn btn-outline-success btn-sm mr-xl-5 w-100 h-100">
          Click Here to Sign Back In!
        </button>
      </Link>
    </Fragment>
  );
};

export default SignOut;
