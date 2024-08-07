/**
 * This method is used to add an authorization header 
 * to requests in case of accessing protected resources
 * @returns 
 */
export default function authHeader() {
    const userStr = localStorage.getItem("user");
    let user = null;
    if (userStr)
        user = JSON.parse(userStr);

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
        // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
        return { Authorization: '' }; // for Spring Boot back-end
        // return { 'x-access-token': null }; // for Node Express back-end
    }
}

export function jwtHeader() {
    const jwt = localStorage.getItem("Authorization");
    
    if (jwt) {
        return { Authorization: 'Bearer ' + jwt}; // for Spring Boot back-end
        // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
        return { Authorization: '' }; // for Spring Boot back-end
        // return { 'x-access-token': null }; // for Node Express back-end
    }
}