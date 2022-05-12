import React from "react";
const CommenDetails = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="Profile" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.ageAgo}</span>
        </div>
        <div className="text">{props.blog}</div>
      </div>
    </div>
  );
};

export default CommenDetails;
