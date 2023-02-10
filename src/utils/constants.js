export const URL_MAINAPI = 'https://api.diploma.iartseva.nomoredomains.club';
export const URL_MOVIESAPI = 'https://api.nomoreparties.co/beatfilm-movies';

export function checkResponse(res) { 
  if (res.ok) {
    return res.json(); 
  }
return Promise.reject(`Error: ${res.status}`); 
}

export const screensize = window.innerWidth;
