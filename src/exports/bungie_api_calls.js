//============= Private ==============//
const platformUrl = "https://www.bungie.net/Platform";
const baseUrl = "https://bungie.net";
const membershipType = "4";
const myMembershipId = "4611686018476396520";
const hunter = "2305843009356176883";
const displayName = "zzxxEE";
const manifestUrl = "https://bungue-api.appspot.com/api/item";
//=============== end ==================//


//=================== Public, add more below ========================//
export function getAllEquippedItems(characterType = hunter) {
  return `${platformUrl}/Destiny2/${membershipType}/Profile/${myMembershipId}/Character/${characterType}`;
}

export function getItemFromManifest(id) {
  return `${manifestUrl}/${id}`;
}

export function getIcon(link) {
  return `${baseUrl}/${link}`;
}

export const tempAPIKey = process.env.API_KEY;