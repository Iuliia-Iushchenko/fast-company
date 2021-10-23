import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import QualityList from "./quolitiesList";
import { useHistory } from "react-router-dom";
import api from "../api";

const UserPage = ({ userId }) => {
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  });

  const handleBack = () => {
    history.replace("/users");
  };

  return (
    <>
      {user && (
        <div className="p-3">
          <h1>{user.name}</h1>
          <h2>Профессия: {user.profession.name}</h2>
          <QualityList qualities={user.qualities} />
          <p>completedMeetings: {user.completedMeetings}</p>
          <h3>Rate: {user.rate}</h3>
          <button
            onClick={() => {
              handleBack();
            }}
          >
            Все пользователи
          </button>
        </div>
      )}
      {!user && <h1 className="p-3">Loading...</h1>}
    </>
  );
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserPage;
