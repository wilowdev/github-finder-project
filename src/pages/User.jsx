import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';
import Spinner from '../components/layouts/Spinner';

function User() {
  const { getUser, user, mounted, clearMount } = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    clearMount();
    getUser(params.login);
  }, []);

  if (mounted) {
    return <div>{user.name}</div>;
  } else {
    return <Spinner />;
  }
}

export default User;
