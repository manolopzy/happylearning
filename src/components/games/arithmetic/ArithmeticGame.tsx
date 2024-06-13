import PlayBoard from "./PlayBoard";
import RankingBoard from "./RankingBoard";
import StatisticBoard from "./StatisticBoard";


function ArithmeticGame() {
    return (
        <div className="arithmeticGame">
            <PlayBoard />
            <StatisticBoard />
            <RankingBoard />
            
        </div>
    );
}

export default ArithmeticGame;
