import React, { Fragment } from "react";

const Prompt = (props) => {
  return (
    <Fragment>
      {props.message === 1 && (
        <div className="container text-center mt-5">
          <h4>Error - Incorrect Username/Password</h4>
        </div>
      )}

      {props.message === 2 && (
        <div className="container text-center mt-5">
          <h4>Error - Username in Use/Email Already Used for Twitter</h4>
        </div>
      )}

      {props.message === 3 && (
        <div className="container text-center mt-5">
          <h4>Error - You Can not Delete Posts That do not Belong to You!</h4>
        </div>
      )}
    </Fragment>
  );
};

export default Prompt;
