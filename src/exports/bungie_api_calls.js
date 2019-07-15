const axios = require('axios');

const platformUrl = "https://www.bungie.net/Platform";
const baseUrl = "https://bungie.net";
const membershipType = "4";
const myMembershipId = "4611686018476396520";
const hunter = "2305843009356176883";
const displayName = "zzxxEE";



export function getAllEquippedItems(characterType = hunter) {
  const endPoint = `//Destiny2/${membershipType}/Profile/${myMembershipId}/Character/${characterType}/?components=205, 301, 300, 302, 303, 304, 305, 306, 307, 308`;
  return getCall(endPoint)
}

function getCall(endPoint) {
  axios.get(`${platformUrl}/${endPoint}`, {
      params: {
        "X-API-Key": tempAPIKey
      }
    })
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}