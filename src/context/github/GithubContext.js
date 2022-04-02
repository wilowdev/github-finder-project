import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    mounted: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //for testing purposes
  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`https://api.github.com/users`);

    const data = await response.json();
    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };

  //search for users
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
    const data = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: data.items,
    });
  };

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        mounted: state.mounted,
        searchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
