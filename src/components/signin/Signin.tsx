import React, { createContext, useContext, useState } from "react";
// import axios, { AxiosResponse } from "axios";
import { SERVER_URL } from "../../Constants";
import {UserProfileContext, UserProfileSetContext } from "../contexts/UserContext";
import HomePage from "../home/HomePage";

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



const Signin = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginData, setLoginData] = useState<User>({ username: '', password: '' });
  const setUser = useContext(UserProfileSetContext);
  const user = useContext(UserProfileContext);

  const handleSignin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({...loginData});
    
    // axios.post(SERVER_URL + '/auth/signin', {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data:{
    //     ...user
    //   }
    // }).then((response: AxiosResponse) => {
    //   console.log(response.data)
    //   const userProfile: UserProfile = {
    //     name: response.data.name,
    //     email: response.data.email
    //   }
    //   console.log(userProfile);
    // }).catch((error) => {
    //   console.log(error);
    // }
    // );


    fetch(SERVER_URL + '/auth/signin', 
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...loginData
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("before updating user data");
        console.log(user);

        console.log(data);
        
        setUser?.({...data});
        console.log("after updating user data");
        console.log(user);
      }
      );
  }
  return (
    
    <div>
      {(user && user?.jwt !== '') ? (
        <HomePage/>
      ) : (
        <>
        <input type="text" value={username} placeholder="Username" onChange={(e) => {
          setUsername(e.target.value);
          setLoginData({ ...loginData, username: e.target.value });
        }} />
        <input type="password" value={password} placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            setLoginData({ ...loginData, password: e.target.value });
          }} />
        <button type="submit" onClick={handleSignin}> Submit</button>
        </>
      )}
      
    </div>
  )
};

export default Signin;