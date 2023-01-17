import axios from "axios";

export default {
  async register(_, payload) {
    const response = await axios.post("/api/v1/accounts", payload);
    console.log(response);
  },
};
