import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  history.push('/');
  return <div>Not Found</div>;
};

export default NotFound;
