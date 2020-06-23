import React, { Fragment } from "react";

const Prompt = (props) => {
  return (
    <Fragment>
      {props.message === 1 ? (
        <div className="container text-center mt-5">
          <h3>Error - Incorrect Username/Password</h3>
        </div>
      ) : (
        <div></div>
      )}

      {props.message === 2 ? (
        <div className="container text-center mt-5">
          <h3>Error - Username in Use/Email Already Used for Twitter</h3>
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};

export default Prompt;
