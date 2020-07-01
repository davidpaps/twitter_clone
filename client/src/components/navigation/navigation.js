import React, { Fragment } from "react";
import classes from "./navigation.module.css";

const Navigation = (props) => {
  return (
    <Fragment>
      <div className={classes.Navigation}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img
              src="https://vignette.wikia.nocookie.net/logopedia/images/9/99/Twitter_2012.svg/revision/latest/scale-to-width-down/340?cb=20180321032720"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
            Twitter
          </a>
          <div className="navbar-collapse collapse"></div>
          <div>
            <ul className="nav navbar-nav navbar-center">
              <li>{props.username}</li>
            </ul>
          </div>
          {props.auth ? (
            <div>
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item active">
                  <a className="nav-link" href="/sign_out">
                    Sign Out <span className="sr-only">(current)</span>
                    <img
                      src="https://cdn.iconscout.com/icon/premium/png-256-thumb/entry-20-291900.png"
                      width="22"
                      height="22"
                      className="d-inline-block "
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item active">
                  <a className="nav-link" href="/sign_up">
                    Sign In <span className="sr-only">(current)</span>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg9NgXjYkbVD1Wb4LzGSv9nYR6bC3Z_B4qWw&usqp=CAU"
                      width="20"
                      height="20"
                      className="d-inline-block "
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link" href="/sign_in">
                    Sign Up <span className="sr-only">(current)</span>
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/user-interface-2-9/34/169-512.png"
                      width="20"
                      height="20"
                      className="d-inline-block"
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </Fragment>
  );
};

export default Navigation;
