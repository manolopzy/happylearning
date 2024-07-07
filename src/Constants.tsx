export const SERVER_URL = 'http://localhost:8084';
export const API_URL = SERVER_URL + '/auth/';
export const ARITHEMETIC_RANDOM_OPERATION = '/arithmetic/random?operator=';
export const ARITHEMETIC_ATTEMPT = '/arithmetic/attempt';
export const ARITHEMETIC_ATTEMPTS = '/arithmetic/attempts?alias=';
export const GAMIFICATION_RANKING = "/gamification/leaders";
export const STATISTICS = "/gamification/stats?userId=";

const username = 'manolo';
const password = '1234';
const credentials = btoa(username + ':' + password);
export const BASIC_AUTH = 'Basic ' + credentials;