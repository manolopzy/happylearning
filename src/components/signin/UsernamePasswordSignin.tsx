import React, { createContext, useContext, useState } from "react";
// import axios, { AxiosResponse } from "axios";
import { LOGIN, SERVER_URL } from "../../Constants";
import {UserProfile, UserProfileContext, UserProfileSetContext } from "../contexts/UserContext";
import HomePage from "../home/HomePage";
import { useNavigate } from "react-router-dom";
interface User {
  username: string;
  password: string;
}

export const AuthContext = createContext<{
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}>({
  isAuthenticated: false,
  user: null,
  login: () => Promise.resolve(),
  logout: () => {},
});

//const LoginPage: React.FC function component
// type User = {
//   id: string;
//   username: string;
//   email: string;
// };

// type AuthAction =
//   | { type: 'LOGIN'; user: User }
//   | { type: 'LOGOUT' };
//   const authReducer: Reducer<{ isAuthenticated: boolean; user: User | null }, AuthAction> = (
//     state: any,
//     action: AuthAction
//   ) => {
//     switch (action.type) {
//       case 'LOGIN':
//         return { isAuthenticated: true, user: action.user };
//       case 'LOGOUT':
//         return { isAuthenticated: false, user: null };
//       default:
//         return state;
//     }
//   };



const UsernamePasswordSignin = () => {
  
  const [loginData, setLoginData] = useState<User>({ username: '', password: '' });

  const navigation = useNavigate();

  const handleSignin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({...loginData});
    const url  = SERVER_URL + LOGIN;
    fetch(url, 
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'username': loginData.username,
        'password': loginData.password
      },
      body: JSON.stringify({
        ...loginData
      })
    })
      .then((response) => {
        console.log("login step 1");
        console.log(response);
        
        navigation("/confirmation");
      }
      );
  }
  return (
    
    <div>
      <input type="text" value={loginData.username} placeholder="Username" onChange={(e) => {
          setLoginData({ ...loginData, username: e.target.value });
        }} />
        <input type="password" value={loginData.password} placeholder="Password"
          onChange={(e) => {
            setLoginData({ ...loginData, password: e.target.value });
          }} />
        <button type="submit" onClick={handleSignin}> Submit</button>
      
    </div>
  )
};


export default UsernamePasswordSignin;