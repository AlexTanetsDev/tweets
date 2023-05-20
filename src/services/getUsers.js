import axios from "axios";
import { adaptUsers } from "../middlewares/adaptUsers";

const BASE_URL = "https://644d69d4cfdddac970a41e37.mockapi.io/users";

export const getUsers = async (p = 1, l = 3) => {
  try {
    const res = await axios.get(`${BASE_URL}?p=${p}&l=${l}`);
    if (res.status === 200) return adaptUsers(res.data);
  } catch (error) {
    console.log(error);
  }
};
