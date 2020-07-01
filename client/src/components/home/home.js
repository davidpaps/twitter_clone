import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./home.module.css";

const home = () => {
  return (
    <div className={classes.Home}>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5b2a905bec4eb77243b05b3c/1531762494480-KPB3OWDFXVL952KXQ8Z6/ke17ZwdGBToddI8pDm48kPipDBN8EsXn0GX4VYEjDvAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2di_anSEgls28Fx9rC-ls48EcpI-gmYcFCPdUS0knNFfOCjLISwBs8eEdxAxTptZAUg/welcome.PNG"
        alt=""
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
      <img
        className={classes.side}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Black_Man_Playing_Guitar_Standing_Cartoon_Vector.svg/1280px-Black_Man_Playing_Guitar_Standing_Cartoon_Vector.svg.png"
        alt=""
      />
      <img
        className={classes.side}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Woman_In_Blue_Holding_Nothing_Cartoon.svg/1280px-Woman_In_Blue_Holding_Nothing_Cartoon.svg.png"
        alt=""
      />
      <img
        className={classes.side}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Man_Looking_at_Phone_Cartoon_Vector.svg/1024px-Man_Looking_at_Phone_Cartoon_Vector.svg.png"
        alt=""
      />
    </div>
  );
};

export default home;
