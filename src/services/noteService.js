import axios from "axios";

const url = "http://localhost:4000/api/v1/";

const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
console.log(headerConfig);

export const createNote = async (obj) => {
  let response = await axios.post(url + "notes/create", obj, headerConfig);
  console.log(response);
  return response;
};

export const getNote = async () => {
  let response = await axios.get(url + "notes/get", headerConfig);
  console.log(response);
  return response;
};
export const updateNoteArchive = async (obj) => {
  let response = await axios.put(
    url + `notes/archive/${obj._id}`,
    obj,
    headerConfig
  );
  console.log(response);
  return response;
};

export const updateNoteTrash = async (obj) => {
  let response = await axios.put(
    url + `notes/trash/${obj._id}`,
    obj,
    headerConfig
  );
  console.log(response);
  return response;
};

export const updateNote = async (obj, _id) => {
  console.log(obj);
  let response1 = await axios.put(url + `notes/${_id}`, obj, headerConfig);
  console.log(response1);
  return response1;
};

export const updateColor = async (id, obj) => {
  let response = await axios.put(url + `notes/color/${id}`, obj, headerConfig);
  console.log(response);
  return response;
};
