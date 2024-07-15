import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import {
  SERVER_URL,
  ARITHEMETIC_RANDOM_OPERATION,
  BASIC_AUTH,
  ARITHEMETIC_ATTEMPT,
} from "../../../Constants";
import React from "react";
import { UserProfile } from "../../contexts/UserContext";
import { OperationExp } from "../../../types/user.type";

const OPERATORS = ["+", "-", "*", "/"];

type Props = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};
type Operador = (typeof OPERATORS)[number];
const SelectOperator = ({ selected, setSelected }: Props) => {
  const handleOperatorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //e.target.options[e.target.selectedIndex];
    setSelected(e.target.options[e.target.selectedIndex].value);
  };

  return (
    <div>
      <div>Value: {selected}</div>
      <select value={selected} onChange={handleOperatorChange}>
        {OPERATORS.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
interface DynamicProps {
  [key: string]: any;
}
// interface OperationObj{
//   factorA: string;
//   factorB: string;
//   operator: string;
//   options: string[];
// }
function PlayBoard({ name, email }: UserProfile) {
  const [operator, setOperator] = useState<string>("+");
  const [update, setUpdate] = useState<boolean>(false);
  //const [selected, setSelected] = React.useState<string>(OPERATORS[0]);
  const [operation, setOperation] = useState<string>("");
  const [operationObj, setOperationObj] = useState<OperationExp>({
    factorA: "",
    factorB: "",
    operator: "",
    options: [],
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = document.forms.namedItem("attemptForm");
    console.log("form = " + form);

    const data = {
      user: { alias: name },
      arithmetic: {
        factorA: operationObj.factorA,
        factorB: operationObj.factorB,
        operator: operator,
      },
      result: form?.attemptResult.value,
    };

    console.log("data = " + data.result);
    const requestUrl = SERVER_URL + ARITHEMETIC_ATTEMPT;
    console.log("url = " + requestUrl);
    const response = await fetch(requestUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const body = await response.text();
    console.log(body);
    setUpdate(!update);
  };

  useEffect(() => {
    //'https://domain.com/path/?param1=value1&param2=value2'

    const requestUrl = SERVER_URL + ARITHEMETIC_RANDOM_OPERATION + operator;
    console.log("url = " + requestUrl);
    /**
     * the embedded netty or tomcat server will
     * replace + sign in url with space, its
     * encoding symbol is "%2B", therefore we have
     * to replace the "+" with it before sending the
     * request
     */
    const encodedUrl = requestUrl.replace("+", "%2B"); //encodeURIComponent(requestUrl);
    axios
      .get(encodedUrl, {
        headers: { Authorization: +BASIC_AUTH },
      })
      .then((response: AxiosResponse) => {
        //console.log(response.data);
        const expression: OperationExp = response.data;
        console.log(expression);
        setOperation(
          expression.factorA + expression.operator + expression.factorB
        );
        setOperationObj({ ...expression });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [operator, update]);
  return (
    <div className="playboard">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Welcome to Social Arithmetic</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center">This is your challenge for today:</h3>
          <SelectOperator selected={operator} setSelected={setOperator} />
          <h1 className="text-center">
            <span className="arithmetic-operation">{operation}</span>
          </h1>
          <p>
            <form id="attempt-form" name="attemptForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="result-attempt">Result?</label>
                <input
                  type="text"
                  name="attemptResult"
                  id="result-attempt"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="user-alias">Your alias:</label>
                <input
                  type="text"
                  name="user-alias"
                  id="user-alias"
                  className="form-control"
                  value={name}
                />
              </div>
              <input type="submit" value="Check" className="btn btn-default" />
            </form>
          </p>
          <div className="result-message"></div>
        </div>
      </div>
    </div>
  );
}

export default PlayBoard;
