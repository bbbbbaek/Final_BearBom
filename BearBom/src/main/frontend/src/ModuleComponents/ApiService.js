import axios from "axios";

const url = "http://localhost:8080";

export class ApiService {
  async fetchUsers(userId) {
    return await axios.post(url + "/user/" + userId);
  }

  async fetchFAQ() {
    return await axios.post(url + "/api/helpdesk/getFaqList");
  }
}
