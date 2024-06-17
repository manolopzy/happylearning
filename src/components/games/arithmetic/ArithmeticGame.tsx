import { useContext } from "react";
import { UserProfileContext } from "../../contexts/UserContext";
import PlayBoard from "./PlayBoard";
import RankingBoard from "./RankingBoard";
import StatisticBoard from "./StatisticBoard";
import Signin from "../../signin/Signin";


function ArithmeticGame() {
    const user = useContext(UserProfileContext);
    if (!user) {
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
