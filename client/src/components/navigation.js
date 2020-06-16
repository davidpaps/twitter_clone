import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/sign_in">Sign In</NavLink>
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default Navigation;
