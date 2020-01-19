const apiEndpoint = "http://localhost:3000";
const pair_API = apiEndpoint + `/pairs`;

export const getPairs = async () => {
  const response = await fetch(pair_API);
  return response.json();
};
