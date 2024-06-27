import { useState } from "react";


function PlayBoard() {
    const [operator, setOperator] = useState<string>("");
    const [operation, setOperation] = useState<string>("");
    
    return (
        <>
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
                </div>
            </div>
        </>
    );
}

export default PlayBoard;
