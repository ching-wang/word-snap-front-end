const apiEndpoint = "https://word-snap.herokuapp.com";
const pair_API = apiEndpoint + `/pairs`;

export const getPairs = async () => {
  const response = await fetch(pair_API);
  return response.json();
};
