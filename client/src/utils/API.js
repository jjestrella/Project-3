import axios from "axios";

export default {
    getCrypto: function() {
      return axios.get({
        method: 'GET',
          uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
          qs: {
            'start': '1',
            'limit': '1',
            'convert': 'USD,BTC'
          },
          headers: {
            'CMC_PRO_API_KEY': '186d9557-8ad1-4f1d-8be1-5af77b161e7e'
          },
          json: true,
          gzip: true
        });
    }




    
//     getDogsOfBreed: function(breed) {
//       return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//     },
//     getBaseBreedsList: function() {
//       return axios.get("https://dog.ceo/api/breeds/list");
//     }
//   };

// const rp = require('request-promise');
// const latestListings = {
    
//   method: 'GET',
//   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//   qs: {
//     'start': '1',
//     'limit': '1',
//     'convert': 'USD,BTC'
//   },
//   headers: {
//     'CMC_PRO_API_KEY': '186d9557-8ad1-4f1d-8be1-5af77b161e7e'
//   },
//   json: true,
//   gzip: true
// };

// rp(latestListings).then(response => {
//   console.log('API call response:', response);
// }).catch((err) => {
//   console.log('API call error:', err.message);
// });
// return axios.latestListings("api/client/src/pages/Home/landingpage");

  