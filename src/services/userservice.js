import axios from "axios";

const url = "http://localhost:4000/api/v1/";

export const signinin = async (obj) => {
  let response = await axios.post(url + "users/login", obj);
  console.log(response);
  return response;
};
export const signupp = async (obj) => {
  let response = await axios.post(url + "users/register", obj);
  console.log(response);
};
