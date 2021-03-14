import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:53281",
  headers: {
    "Content-type": "application/json"
  }
});