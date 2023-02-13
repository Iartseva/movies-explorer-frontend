export const URL_MAINAPI = 'https://api.diploma.iartseva.nomoredomains.club';
export const URL_MOVIESAPI = 'https://api.nomoreparties.co/beatfilm-movies';
export const SCREEN_L = 1280;
export const SCREEN_S = 768;

export function checkResponse(res) { 
  if (res.ok) {
    return res.json(); 
  }
return Promise.reject(`Error: ${res.status}`); 
}

export const regexEmail = "^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$";