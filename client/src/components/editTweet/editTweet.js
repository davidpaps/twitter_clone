import React, { Fragment, useState } from "react";

const EditTweet = ({ tweet }) => {
  const [description, setDescription] = useState(tweet.description);

  const updateDescription = async (event) => {
    event.preventDefault();

    const body = { description };
    const response = await fetch(
      `http://localhost:5000/tweets/${tweet.tweet_id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    window.location = "/";
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-outline-warning btn-sm"
        data-toggle="modal"
        data-target={`#id${tweet.tweet_id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${tweet.tweet_id}`}
        onClick={() => setDescription(tweet.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Tweet</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(tweet.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-success btn-sm"
                data-dismiss="modal"
                onClick={(event) => updateDescription(event)}
              >
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                data-dismiss="modal"
                onClick={() => setDescription(tweet.description)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTweet;
