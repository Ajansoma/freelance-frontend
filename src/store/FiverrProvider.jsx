import { useState, useEffect } from 'react';
import FiverrContext from './fiverrContext';

//local storage
const storedCurrentUser = () =>
  JSON.parse(localStorage.getItem('currentUser')) || {};
// const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

export const FiverrProvider = (props) => {
  const [minMax, setMinMax] = useState(['', '']);
  const [currentUser, setCurrentUser] = useState(storedCurrentUser);
  const [users, setUsers] = useState(null);

  const minMaxHandler = function (min, max) {
    setMinMax([min, max]);
  };

  const userHandler = function (user) {
    setCurrentUser(user);
  };

  const usersHandler = function (users) {
    setUsers(users);
  };

  const logoutHandler = function () {
    setCurrentUser(null);
  };

  const fiverrValues = {
    minMax: minMax,
    currentUser: currentUser,
    users: users,
    minMaxHandler: minMaxHandler,
    userHandler: userHandler,
    usersHandler: usersHandler,
    logoutHandler: logoutHandler,
  };
  return (
    <FiverrContext.Provider value={fiverrValues}>
      {props.children}
    </FiverrContext.Provider>
  );
};
