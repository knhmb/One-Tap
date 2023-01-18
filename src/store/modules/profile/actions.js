import axios from "axios";

export default {
  async getUserDetails(context, payload) {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.get(`/api/v1/accounts/${payload}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    context.commit("SET_USER_DETAILS", response.data);
  },
};
