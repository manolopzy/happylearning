import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL, ARITHEMETIC_RANDOM_OPERATION, BASIC_AUTH, GAMIFICATION_RANKING } from "../../../Constants";

interface RankingRecord {
  userId: string;
  totalScore: number;
}

function RankingBoard() {

  const [rankings, setRankings] = useState<RankingRecord[]>([]);

  useEffect(() => {
    //'https://domain.com/path/?param1=value1&param2=value2'
    refresh();
    
  }, []);

  const refresh = ()=>{
    const requestUrl = SERVER_URL + GAMIFICATION_RANKING;
    console.log("url = " + requestUrl);
    /**
     * the embedded netty or tomcat server will 
     * replace + sign in url with space, its 
     * encoding symbol is "%2B", therefore we have 
     * to replace the "+" with it before sending the 
     * request
     */
    
    axios
      .get(requestUrl, {
        headers: { Authorization: +BASIC_AUTH },
      })
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setRankings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const rankingRows = rankings.map((ranking, index) => {
    return (
      <tr>
        <th>{ranking.userId}</th>
        <th>{ranking.totalScore}</th>
      </tr>
    );
  });

  const handleRefreshing = () => {
    refresh();
  };
  return (
    <div className="ranking">
      <h3>Ranking board</h3>
      <table id="rankingboard" className="table">
        <tr>
          <th>User Name</th>
          <th>Score</th>
        </tr>
        <tbody id="rankingboard-body">
          {rankingRows}
        </tbody>
      </table>
      <div className="text-right">
        <button
          id="refresh-rankingboard"
          className="btn btn-default"
          type="submit"
          onClick={handleRefreshing}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default RankingBoard;


