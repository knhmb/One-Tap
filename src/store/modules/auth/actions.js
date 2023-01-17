import axios from "axios";

export default {
  async register(_, payload) {
    const response = await axios.post("/api/v1/accounts", payload);
    console.log(response);
  },
  async login(context, payload) {
    const response = await axios.post("/api/v1/authenticate", payload);
    context.commit("LOGIN", response.data.item);
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
  },
};
