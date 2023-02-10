import { URL_MOVIESAPI} from "./constants";
import { checkResponse } from "./constants";

function getInitialCards() {
  return fetch(URL_MOVIESAPI, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => checkResponse(res));
}

export { getInitialCards };