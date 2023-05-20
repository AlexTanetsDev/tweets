import axios from "axios";

const BASE_URL = "https://644d69d4cfdddac970a41e37.mockapi.io/users";

export const getTotal = async () => {
  try {
    const res = await axios.get(BASE_URL);
    if (res.status === 200) return res.data.length;
  } catch (error) {
    console.log(error);
  }
};
