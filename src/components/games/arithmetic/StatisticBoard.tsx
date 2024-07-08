

function StatisticBoard({userId, score, badges}:{ userId?: string | undefined; score?: number | undefined; badges?: string[] | undefined; }) {

  return (
    <div id="stats-board">
      <h2>Your statistics</h2>
      <table id="stats" className="table">
        <tbody>
          <tr>
            <td className="info">User ID:</td>
            <td id="stats-user-id">{userId}</td>
          </tr>
          <tr>
            <td className="info">Score:</td>
            <td id="stats-score">{score}</td>
          </tr>
          <tr>
            <td className="info">Badges:</td>
            <td id="stats-badges">{badges}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StatisticBoard;
