function StatisticBoard() {
  return (
    <div id="stats-board">
      <h2>Your statistics</h2>
      <table id="stats" className="table">
        <tbody>
          <tr>
            <td className="info">User ID:</td>
            <td id="stats-user-id"></td>
          </tr>
          <tr>
            <td className="info">Score:</td>
            <td id="stats-score"></td>
          </tr>
          <tr>
            <td className="info">Badges:</td>
            <td id="stats-badges"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StatisticBoard;
