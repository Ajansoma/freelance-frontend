import { createContext } from 'react';

const FiverrContext = createContext({
  minMax: [],
  currentUser: {},
  users: null,
  logout: () => {},
  minMaxHandler: () => {},
  userHandler: () => {},
  usersHandler: () => {},
});

export default FiverrContext;
