import 'whatwg-fetch'
import md5 from 'md5'

const PUBLIC_KEY = '5310aae645d4f3b700b0db86b16ef8e9' // {YOU KEY HERE}
const PRIVATE_KEY = '6b82b340d94200318d2aa15aff961d991f480a3a'
/**
 * Retrieve characters from Marvel API
 *
 * @param category
 * @returns Promise
 */

export function getMarvelCharacters(){
  const ts = new Date().getTime()
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY)
  return fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
    .then((response)=> {
      return response.json()
    })
    .catch((err) =>{
      return err;
    });
};
