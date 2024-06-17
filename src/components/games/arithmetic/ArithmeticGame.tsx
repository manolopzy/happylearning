import { useContext } from "react";
import { UserProfileContext } from "../../contexts/UserContext";
import PlayBoard from "./PlayBoard";
import RankingBoard from "./RankingBoard";
import StatisticBoard from "./StatisticBoard";


function ArithmeticGame() {
    const user = useContext(UserProfileContext);
    if (!user) {

        return <div> You haven't logged in yet!</div>;
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
