/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookMark = (id) => {
    const newUsers = Array.from(users);
    const currentUser = newUsers.find((user) => user._id === id);
    currentUser.status === true
      ? (currentUser.status = false)
      : (currentUser.status = true);
    setUsers(newUsers);
  };

  return (
    <div>
      <SearchStatus length={users.length} />
      <Users
        onDelete={handleDelete}
        onToggle={handleToggleBookMark}
        users={users}
      />
    </div>
  );
}

export default App;
