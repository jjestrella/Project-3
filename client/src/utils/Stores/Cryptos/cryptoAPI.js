import axios from "axios";

export default {
    getCryptos: function () {
        return axios.get("/api/crypto")
    }
}

