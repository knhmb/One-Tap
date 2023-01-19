import axios from "axios";

export default {
  async getContents(context) {
    const response = await axios.get("/api/v1/cms/contents");
    context.commit("SET_CONTENTS", response.data.items);
  },
};
