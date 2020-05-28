import React, { Fragment } from "react";

const SignIn = () => {
  return (
    <Fragment>
      <h1 className="text-center mt-5">Welcome to Twitter</h1>
      <form>
        <input type="email" className="" />
        <input type="password" className="" />
        <button>Sign In</button>
      </form>
      <div className="container" />
    </Fragment>
  );
};

export default SignIn;
