export const URL_MAINAPI = 'https://api.lastproject.students.nomoredomains.club';
export const URL_MOVIESAPI = 'https://api.nomoreparties.co/beatfilm-movies';
export const SCREEN_L = 1280;
export const SCREEN_S = 768;
export const FILTER_DURATION_VALUE = 40;
export const CARDCOUNT_FOR_L = 12;
export const CARDCOUNT_FOR_M = 8;
export const CARDCOUNT_FOR_S = 5;

export function checkResponse(res) { 
  if (res.ok) {
    return res.json(); 
  }
return Promise.reject(`Ошибка: ${res.status} ${res.statusText}. Попробуйте ввести другие значения`); 
}
