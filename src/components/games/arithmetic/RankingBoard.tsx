function RankingBoard() {
  return (
    <div className="ranking">
      <h3>Ranking board</h3>
      <table id="rankingboard" className="table">
        <tr>
          <th>User Name</th>
          <th>Score</th>
        </tr>
        <tbody id="rankingboard-body"></tbody>
      </table>
      <div className="text-right">
        <button
          id="refresh-rankingboard"
          className="btn btn-default"
          type="submit"
        >
          Refresh
        </button>
      </div>

      <div id="results-div">
        <h2>Your latest attempts</h2>
        <table id="results" className="table">
          <tr>
            <th>Attempt ID</th>
            <th>Arithmetic</th>
            <th>You entered</th>
            <th>Correct?</th>
          </tr>
          <tbody id="results-body"></tbody>
        </table>
      </div>
    </div>
  );
}

export default RankingBoard;
