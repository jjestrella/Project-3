import axios from "axios";

export default {
    getCryptos: function () {
        return axios.get("/api/crypto")
    },
    setCrypto: function (cryptoData) {
        return axios.post("/api/crypto", cryptoData).then(({data}) => data);
    }
}

