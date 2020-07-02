import React from "react";
import classes from "./error.module.css";

const Error = () => {
  return (
    <div className={classes.Error}>
      <h1 className="text-center">Error - Page Does Not Exist!</h1>
      <img
        src="https://www.oho.com/sites/default/files/styles/width_1160/public/2020-03/shutterstock_1076235776.jpg?itok=gNVLEOJt"
        alt=""
      />
    </div>
  );
};

export default Error;
