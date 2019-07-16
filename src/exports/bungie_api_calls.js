//============= Private ==============//
const platformUrl = "https://www.bungie.net/Platform";
const baseUrl = "https://bungie.net";
const membershipType = "4";
const myMembershipId = "4611686018476396520";
const hunter = "2305843009356176883";
const displayName = "zzxxEE";
//=============== end ==================//


//=================== Public, add more below ========================//
export function getAllEquippedItems(characterType = hunter) {
  return `${platformUrl}/Destiny2/${membershipType}/Profile/${myMembershipId}/Character/${characterType}`;
}
