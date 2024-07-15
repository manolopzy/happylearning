import React, { createContext, useContext, useState } from "react";
// import axios, { AxiosResponse } from "axios";
import { LOGIN, SERVER_URL } from "../../Constants";
import {UserProfile, UserProfileContext, UserProfileSetContext } from "../contexts/UserContext";
import HomePage from "../home/HomePage";
import axios, { AxiosResponse } from "axios";

interface Auth {
  username: string;
  code: string;
}

export const AuthContext = createContext<{
  isAuthenticated: boolean;
  user: Auth | null;
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
  const [code, setCode] = useState<string>("");
  const [loginData, setLoginData] = useState<Auth>({ username: '', code: '' });
  const setUser = useContext(UserProfileSetContext);
  const user = useContext(UserProfileContext);

  const handleSignin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({...loginData});
    
    // axios.post(SERVER_URL + LOGIN, {
    //   ...loginData
    // }, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'username': loginData.username,
    //     'code': loginData.code
    //   }
    // }).then(response => {
    //   console.log("before updating user data");
    //   console.log(user);

    //   console.log(response);
    //   console.log(response.headers);
    //   //const userInfo: UserProfile = {jwt: data.jwt, name: data.registrationUser.username, email: data.registrationUser.password};
    //   console.log(response.headers.hasAuthorization);
      
    //   //setUser?.({...userInfo});
    //   console.log("after updating user data");
    //   console.log(user);
    // }).catch((error) => {
    //   console.log(error);
    // }
    // );


    fetch(SERVER_URL + LOGIN, 
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'username': loginData.username,
        'code': loginData.code
      },
      mode: 'cors',
      body: JSON.stringify({
        ...loginData
      })
    })
      // .then(response => response.json())
      .then(response => {
        console.log("before updating user data");
        console.log(user);

        console.log(response);
        console.log(response.headers);
        //const userInfo: UserProfile = {jwt: data.jwt, name: data.registrationUser.username, email: data.registrationUser.password};
        console.log(response.headers.get("Authorization"));
        response.headers.forEach(console.log);
        for(let entry in response.headers.entries()) {
          console.log(entry);
        }
        response.headers.forEach(function(value, key){
          console.log('[' + key + '] = '+value);
      });
        
        console.log("after updating user data");
        console.log(user);

        const profile : UserProfile = {name: username, email: username, jwt: response.headers.get("Authorization") ?? ''};
        localStorage.setItem("Authorization", response.headers.get("Authorization") ?? '');
        setUser?.({...profile});
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
        <input type="password" value={code} placeholder="code"
          onChange={(e) => {
            setCode(e.target.value);
            setLoginData({ ...loginData, code: e.target.value });
          }} />
        <button type="submit" onClick={handleSignin}> Submit</button>
        </>
      )}
      
    </div>
  )
};


export default Signin;