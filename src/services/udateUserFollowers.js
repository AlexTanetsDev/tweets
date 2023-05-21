import axios from "axios";

const BASE_URL = "https://644d69d4cfdddac970a41e37.mockapi.io/users";

export const updateUserFollowers = async (id, body) => {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, body);
    return res.status;
  } catch (error) {
    console.log(error);
  }
};
