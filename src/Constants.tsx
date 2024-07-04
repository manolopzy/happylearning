export const SERVER_URL = 'http://localhost:8084';
export const API_URL = SERVER_URL + '/auth/';
export const RANDOM_ARITHEMETIC_OPERATION = '/arithmetic/random?operator=';

const username = 'manolo';
const password = '1234';
const credentials = btoa(username + ':' + password);
export const BASIC_AUTH = 'Basic ' + credentials;