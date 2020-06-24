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
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse"></div>

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
              <ul className="nav navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/home">
                    Home <span className="sr-only">(current)</span>
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
