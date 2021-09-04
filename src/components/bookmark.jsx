import React from "react";

const BookMark = ({ status, ...rest }) => {
  return (
    <i
      {...rest}
      className={`bi bi-bookmark-star${status === true ? "-fill" : ""}`}
      style={{ fontSize: "25px" }}
    ></i>
  );
};

export default BookMark;
