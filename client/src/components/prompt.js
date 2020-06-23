import React, { Fragment } from "react";

const Prompt = (props) => {
  return (
    <Fragment>
      {props.message ? (
        <div className="container text-center mt-5">
          <h3>Error - Incorrect Username/Password</h3>
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};

export default Prompt;
