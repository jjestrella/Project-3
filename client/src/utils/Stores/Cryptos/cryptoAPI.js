import axios from "axios";

export default {
  // Gets current user
  getCryptos: function() {
    return axios.get("api/api-routes").then(({data}) => data);

  }

}