import React from "react";
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
}) => {
  return (
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
};

export default User;
