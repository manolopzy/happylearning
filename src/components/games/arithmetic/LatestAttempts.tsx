import { UserAttempt } from "../../../types/user.type";
interface Props {
  attempts: UserAttempt[];
}
export const LatestAttempts: React.FC<Props> = ({ attempts }) => {
    const attemptRows = attempts.map((attempt, index) => {
        return (
          <AttemptRow attempt={attempt} key={index} index={index}/>
        );
      });
    return (
    <div id="results-div">
      <h2>Your latest attempts</h2>
      <table id="results" className="table">
        <tr>
          <th>Attempt ID</th>
          <th>Arithmetic</th>
          <th>You entered</th>
          <th>Correct?</th>
        </tr>
        <tbody id="results-body">
            {attemptRows}
        </tbody>
      </table>
    </div>
  );
};
function AttemptRow({ attempt, index }: {attempt: UserAttempt, index: number}) {

    return (
        <tr>
            <td>{attempt.id}</td>
            <td>{attempt.arithmetic.factorA + attempt.arithmetic.operator + attempt.arithmetic.factorB}</td>
            <td>{attempt.result}</td>
            <td>{attempt.correct ? "true":"false"}</td>
            <td><button onClick={()=>{
                console.log("index = " + index);
                
            }}>Delete</button></td>
        </tr>
    );
}