/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({
  onDelete,
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onToggle,
  ...user
}) => (
  <tr key={_id}>
    <th style={{ fontWeight: "400" }}>{name}</th>
    <td>
      {qualities.map((qualitie) => (
        <Qualitie key={qualitie._id} {...qualitie} />
      ))}
    </td>
    <td>{profession.name}</td>
    <td>{completedMeetings}</td>
    <td>{`${rate}/5`}</td>
    <td>
      <BookMark onClick={() => onToggle(_id)} {...user} />
    </td>
    <td>
      <button
        onClick={() => {
          onDelete(_id);
        }}
        type="button"
        className="btn btn-danger btn-sm"
      >
        delete
      </button>
    </td>
  </tr>
);

User.propTypes = {
  onDelete: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.objectOf.isRequired,
  profession: PropTypes.objectOf.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default User;
