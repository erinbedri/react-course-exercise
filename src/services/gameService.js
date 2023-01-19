const baseUrl = "http://localhost:3030/data/games";

export const getAll = () => {
  return fetch(baseUrl).then((res) => res.json());
};
