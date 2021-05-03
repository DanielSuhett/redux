import axios from "axios";

const apiLocal = axios.create({
  baseURL: "http://localhost:3001"
});

const apiProduction = axios.create({
  baseURL: "https://afferoexpress.herokuapp.com"
});

export { apiLocal, apiProduction };
