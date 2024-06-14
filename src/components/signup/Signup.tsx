import React, { useState, useReducer } from "react";
import axios, { AxiosResponse } from "axios";
import { SERVER_URL } from "../../Constants";
//const LoginPage: React.FC function component
const Signup = async () => {
    const response: AxiosResponse =
        await axios.post(SERVER_URL + '/auth/signup', {});
    return (
        <form id="registerForm">

            <label htmlFor="username">Username: </label>
            <input type="text" name="username" /><br />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" /><br />
            <label htmlFor="confirm">Confirm password: </label>
            <input type="password" name="confirm" /><br />
            <label htmlFor="fullname">Full name: </label>
            <input type="text" name="fullname" /><br />

            <label htmlFor="street">Street: </label>
            <input type="text" name="street" /><br />

            <label htmlFor="city">City: </label>
            <input type="text" name="city" /><br />

            <label htmlFor="state">State: </label>
            <input type="text" name="state" /><br />

            <label htmlFor="zip">Zip: </label>
            <input type="text" name="zip" /><br />

            <label htmlFor="phone">Phone: </label>
            <input type="text" name="phone" /><br />

            <input type="submit" value="Register" />
        </form>);
}


