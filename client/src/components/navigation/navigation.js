import React, { Fragment } from "react";

const Navigation = (props) => {
  return (
    <Fragment>
      <div>
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
                    Sign Out
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
                      src="https://static.thenounproject.com/png/344461-200.png"
                      width="22"
                      height="22"
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
                      src="https://previews.123rf.com/images/azvector/azvector1803/azvector180300411/97269455-login-icon-authorize-icon-log-in-sign-login-icon-open-account-symbol-register-new-user-vector-icon.jpg"
                      width="34"
                      height="34"
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
