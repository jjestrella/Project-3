import axios from "axios";

const apiKey  = "CMC_PRO_API_KEY=186d9557-8ad1-4f1d-8be1-5af77b161e7e";

export default {
    getCryptos: function () {
        return axios.get("/api/crypto")
    }
}

