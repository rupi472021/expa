import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:54976",
  headers: {
    "Content-type": "application/json"
  }
});