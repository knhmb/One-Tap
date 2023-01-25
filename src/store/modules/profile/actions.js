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
  async updateUserDetails(_, payload) {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.put(
      `/api/v1/accounts/${payload.id}`,
      payload.data,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    console.log(response);
  },

  async updateUserAvatar(_, payload) {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.put(
      `/api/v1/accounts/${payload.id}`,
      { avatar: payload.avatar },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    console.log(response);
  },
  async getAccountSocials(context) {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.get("/api/v1/accounts/socials", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    context.commit("SET_ACCOUNT_SOCIALS", response.data.items);
  },

  async updateAccountSocials(_, payload) {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.put(
      `/api/v1/accounts/socials/${payload.id}`,
      payload.data,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    console.log(response);
  },
  async getButtons(context) {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.get("/api/v1/libraries/buttons", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(response);
    context.commit("SET_BUTTONS", response.data.items);
  },
};
