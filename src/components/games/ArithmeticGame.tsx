

function ArithmeticGame() {
    return (
        <div className="App">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Welcome to Social Arithmetic</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-center">This is your challenge for today:</h3>
                    <h1 className="text-center">

                        <span className="arithmetic-a"></span>
                        <select id="arithmetic">
                            <option value="addition">+</option>
                            <option value="subtraction">-</option>
                            <option value="multiplication">×</option>
                            <option value="division">÷</option>
                        </select>
                        <span className="arithmetic-b"></span>
                    </h1>
                    <p>

                        <form id="attempt-form">
                            <div className="form-group">
                                <label htmlFor="result-attempt">Result?</label>
                                <input type="text" name="result-attempt" id="result-attempt" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user-alias">Your alias:</label>
                                <input type="text" name="user-alias" id="user-alias" className="form-control" />
                            </div>
                            <input type="submit" value="Check" className="btn btn-default" />
                        </form>
                    </p>
                    <div className="result-message"></div>

                    <div id="stats-div">
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

                </div>
                <div className="col-md-6">
                    <h3>Leaderboard</h3>
                    <table id="leaderboard" className="table">
                        <tr>
                            <th>User ID</th>
                            <th>Score</th>
                        </tr>
                        <tbody id="leaderboard-body"></tbody>
                    </table>
                    <div className="text-right">
                        <button id="refresh-leaderboard" className="btn btn-default" type="submit">Refresh</button>
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
            </div>
        </div>
    );
}

export default ArithmeticGame;
