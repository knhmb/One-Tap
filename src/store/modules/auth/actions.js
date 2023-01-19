import axios from "axios";
import router from "@/route";

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
  async logout() {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.delete("/api/v1/authenticate", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(response);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.replace("/");
  },
  async checkAccessToken() {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.get("/api/v1/authenticate", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(response);
  },
  async checkRefreshToken(context) {
    const userToken = localStorage.getItem("refreshToken");

    const response = await axios.put(
      "/api/v1/authenticate",
      {},
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    context.commit("LOGIN", response.data.item);
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
  },
};
