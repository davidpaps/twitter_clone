import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SignOut = () => {
  return (
    <Fragment>
      <div>
        <h1 className="text-center mt-5">
          You Have Been Signed out of Twitter, See you Again Soon!
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Black_Man_Walking_Cartoon_Vector.svg/1280px-Black_Man_Walking_Cartoon_Vector.svg.png"
          height="50%"
          width="50%"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Man_Walking_Cartoon_Vector.svg/800px-Man_Walking_Cartoon_Vector.svg.png"
          height="50%"
          width="50%"
        />
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
