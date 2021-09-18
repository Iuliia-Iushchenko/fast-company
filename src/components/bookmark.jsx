/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => (
  <i
    {...rest}
    className={`bi bi-bookmark-star${status === true ? "-fill" : ""}`}
    style={{ fontSize: "25px" }}
  />
);

BookMark.propTypes = {
  status: PropTypes.bool.isRequired
};

export default BookMark;
