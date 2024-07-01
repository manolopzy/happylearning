import { useContext, useEffect } from "react";
import { UserProfile, UserProfileContext } from "../../contexts/UserContext";
import PlayBoard from "./PlayBoard";
import RankingBoard from "./RankingBoard";
import StatisticBoard from "./StatisticBoard";
import Signin from "../../signin/Signin";
import axios, { AxiosResponse } from "axios";
import { RANDOM_ARITHEMETIC_OPERATION, SERVER_URL } from "../../../Constants";


function ArithmeticGame() {
    const user = useContext(UserProfileContext);
    console.log("arithmetic game", user);
    if (!user || !user.jwt) {
        return <Signin />
    }
    return (
        <div className="arithmeticGame">
            <PlayBoard />
            <StatisticBoard />
            <RankingBoard />

        </div>
    );
}

export default ArithmeticGame;
