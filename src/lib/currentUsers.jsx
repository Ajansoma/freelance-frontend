import { useContext } from 'react';
import FiverrContext from '../store/fiverrContext';

export const user = function () {
  const cxt = useContext(FiverrContext);
  return cxt.currentUser;
};
