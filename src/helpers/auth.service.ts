import axios from "axios";
import { API_URL } from "../Constants";


export const request = ( url:string, params = {}, method = 'GET' ) => {
    // let options = {
    //     method
    // };

    // const options = {
    //     method: 'POST',
    //     body: JSON.stringify( params )  
    // };

    if ( 'GET' === method ) {
        url += '?' + ( new URLSearchParams( params ) ).toString();
    } else {
        // options.body = JSON.stringify( params );
    }
    
    // return fetch( url, options ).then( response => response.json() );
};


/**
 * This is used to regiter a new user
 * @param username 
 * @param email 
 * @param password 
 * @returns Promise<AxiosResponse<...>>
 */
export const register = (username: string, email: string, password: string) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};
/**
 * This method send the log in request to the 
 * server, and gets a token as response which 
 * will be stored together with other information 
 * in the local storage
 * @param username 
 * @param password 
 * @returns 
 */
export const login = (username: string, password: string) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
/**
 * User log out method, it will clean the 
 * user login information from the local 
 * storage
 */
export const logout = () => {
  localStorage.removeItem("user");
};

/**
 * 
 * @returns Get user details
 */
export const getUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};