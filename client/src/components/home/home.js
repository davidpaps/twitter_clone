import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <Fragment>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5b2a905bec4eb77243b05b3c/1531762494480-KPB3OWDFXVL952KXQ8Z6/ke17ZwdGBToddI8pDm48kPipDBN8EsXn0GX4VYEjDvAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2di_anSEgls28Fx9rC-ls48EcpI-gmYcFCPdUS0knNFfOCjLISwBs8eEdxAxTptZAUg/welcome.PNG"
        width="100%"
        height="100%"
      />

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
