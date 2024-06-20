import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { SERVER_URL } from "../../Constants";
import { UserProfile } from "../contexts/UserContext";

//const LoginPage: React.FC function component

interface User {
  username: string;
  password: string;
}
const Signin = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<User>({ username: '', password: '' });

  const handleSignin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({...user});
    
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
        ...user
      })
    })
      .then(response => response.json())
      .then(data => console.log(data)
      );
  }
  return (
    <div>
      <input type="text" value={username} placeholder="Username" onChange={(e) => {
        setUsername(e.target.value);
        setUser({ ...user, username: e.target.value });
      }} />
      <input type="password" value={password} placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
          setUser({ ...user, password: e.target.value });
        }} />
      <button type="submit" onClick={handleSignin}> Submit</button>
    </div>
  )
};

export default Signin;