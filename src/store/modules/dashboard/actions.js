import axios from "axios";

export default {
  async getContents() {
    const response = await axios.get("/api/v1/cms/contents");
    console.log(response);
  },
};
