import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Twitter </NavLink> |
      <NavLink to="/sign_in">Sign In </NavLink> |
      <NavLink to="/sign_up">Sign Up </NavLink> |
      <NavLink to="/home">Home </NavLink>
    </div>
  );
};

export default Navigation;
