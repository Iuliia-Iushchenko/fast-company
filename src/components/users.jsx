import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handlerDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    if (number === 1 || number > 4) {
      return (
        <h2>
          <span className="badge bg-primary">
            {number} человек тусанет с тобой сегодня
          </span>
        </h2>
      );
    } else if (number > 1 && number < 5) {
      return (
        <h2>
          <span className="badge bg-primary">
            {number} человека тусанут с тобой сегодня
          </span>
        </h2>
      );
    } else if (number === 0) {
      return (
        <h2>
          <span className="badge bg-danger">Никто с тобой не тусанет</span>
        </h2>
      );
    }
  };

  const renderTableRows = (array) => {
    return array.map((item) => (
      <tr key={item._id}>
        <th style={{ fontWeight: "400" }}>{item.name}</th>
        <td>
          {item.qualities.map((qualitie) => (
            <span
              key={qualitie._id}
              className={`badge bg-${qualitie.color} m-1`}
            >
              {qualitie.name}
            </span>
          ))}
        </td>
        <td>{item.profession.name}</td>
        <td>{item.completedMeetings}</td>
        <td>{`${item.rate}/5`}</td>
        <td>
          <button
            onClick={() => {
              handlerDelete(item._id);
            }}
            type="button"
            className="btn btn-danger btn-sm"
          >
            delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      {renderPhrase(users.length)}
      <table
        className={`table ${users.length === 0 ? "invisible" : "visible"}`}
      >
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderTableRows(users)}</tbody>
      </table>
    </>
  );
};

export default Users;
