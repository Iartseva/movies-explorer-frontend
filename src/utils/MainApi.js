import { URL_MAINAPI } from "./constants";
import { checkResponse } from "./constants";

function register(name, email, password) {
  return fetch(`${URL_MAINAPI}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name, email, password}),
  }).then(checkResponse);
}

function login(email, password) {
  return fetch(`${URL_MAINAPI}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, password}),
  }).then((res) => checkResponse(res));
}

function logout() {
  return fetch(`${URL_MAINAPI}/signout`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

function getCards() {
  return fetch(`${URL_MAINAPI}/movies`, {
    method: "GET",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(checkResponse);
}

function getUser() {
  return fetch(`${URL_MAINAPI}/users/me`, {
    method: "GET",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

function changeUser(name, email) {
  return fetch(`${URL_MAINAPI}/users/me`, {
    method: "PATCH",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name, email}),
  }).then(checkResponse);
}

function createSavedFilm(newSavedFilm) {
  return fetch(`${URL_MAINAPI}/movies`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: newSavedFilm.country,
      director: newSavedFilm.director,
      duration: newSavedFilm.duration,
      year: newSavedFilm.year,
      description: newSavedFilm.description,
      image: 'https://api.nomoreparties.co' + newSavedFilm.image.url,
      trailerLink: newSavedFilm.trailerLink,
      thumbnail: 'https://api.nomoreparties.co' + newSavedFilm.image.formats.thumbnail.url,
      movieId: newSavedFilm.id,
      nameRU: newSavedFilm.nameRU,
      nameEN: newSavedFilm.nameEN,
    }),
  }).then((res) => checkResponse(res));
}

function deleteSavedFilm(movieId) {
  return fetch(`${URL_MAINAPI}/movies/${movieId}`, {
    method: "DELETE",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => checkResponse(res));
}

export { register, login, logout, getCards, getUser, 
  changeUser, createSavedFilm, deleteSavedFilm };