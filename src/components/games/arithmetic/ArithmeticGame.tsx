import { useContext, useEffect, useState } from "react";
import { UserProfile, UserProfileContext } from "../../contexts/UserContext";
import PlayBoard from "./PlayBoard";
import RankingBoard from "./RankingBoard";
import StatisticBoard from "./StatisticBoard";
import {LatestAttempts} from "./LatestAttempts";
import Signin from "../../signin/Signin";
import axios, { AxiosResponse } from "axios";
import { ARITHEMETIC_ATTEMPT, ARITHEMETIC_ATTEMPTS, ARITHEMETIC_RANDOM_OPERATION, BASIC_AUTH, SERVER_URL } from "../../../Constants";
import { UserAttempt } from "../../../types/user.type";



function ArithmeticGame() {
    const user = useContext(UserProfileContext);
    console.log("arithmetic game", user);
    if (!user || !user.jwt) {
        return <Signin />
    }
    else{
        return <MainBoard {...user}/>
    }
    
}

function MainBoard(user: UserProfile){
    const [attemps, setAttemps] = useState<UserAttempt[]>([]);

    useEffect(() => {
        //'https://domain.com/path/?param1=value1&param2=value2'
    
        const requestUrl = SERVER_URL + ARITHEMETIC_ATTEMPTS + user.name;
        console.log("url = " + requestUrl);
        /**
         * the embedded netty or tomcat server will 
         * replace + sign in url with space, its 
         * encoding symbol is "%2B", therefore we have 
         * to replace the "+" with it before sending the 
         * request
         */
        const encodedUrl = requestUrl.replace('+', '%2B');//encodeURIComponent(requestUrl);
        axios
          .get(encodedUrl, {
            headers: { Authorization: + BASIC_AUTH },
          })
          .then((response: AxiosResponse) => {
            console.log(response.data);
            setAttemps(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    console.log("user obj", user);

    return (
        <div className="arithmeticGame">
            <PlayBoard {...user}/>
            <StatisticBoard />
            <LatestAttempts attempts={attemps}/>
            <RankingBoard />

        </div>
    );
}
export default ArithmeticGame;
