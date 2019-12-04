import axios from "axios";

export default {
    getCryptos: function () {
        return axios.get("/api/crypto")
    },
    setCrypto: function (cryptoData) {
        return axios.post("/api/crypto", cryptoData).then(({data}) => data);
    },
    sellCrypto: function (cryptoData) {
        return axios.post("/api/sell-crypto", cryptoData).then(({data}) => data);
    },
    delCrypto: function (cryptoData) {
        return axios.post("/api/delete-crypto", cryptoData).then(({data}) => data);
    },
    getCrypto: function() {
        return axios.get("/api/bought-crypto").then(({data}) => data);
    }
}

