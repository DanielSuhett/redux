import axios from "axios";

const apiLocal = axios.create({
  baseURL: "http://localhost:3001"
});

export { apiLocal };
