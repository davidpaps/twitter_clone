import React from "react";
import { Link } from "react-router-dom";
import classes from "./signOut.module.css";

const SignOut = () => {
  return (
    <div className={classes.SignOut}>
      <h1 className="text-center mt-5">You Have Been Signed out of Twitter!</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Black_Man_Traveling_with_Luggage_Cartoon_Vector.svg/800px-Black_Man_Traveling_with_Luggage_Cartoon_Vector.svg.png"
        alt=""
      />

      <Link to="/sign_in">
        <button className="btn btn-outline-success btn-sm mr-xl-5 w-100 h-100">
          Click Here to Sign Back In!
        </button>
      </Link>
    </div>
  );
};

export default SignOut;
