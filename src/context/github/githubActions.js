const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
  const data = await response.json();

  return data.items;
};
