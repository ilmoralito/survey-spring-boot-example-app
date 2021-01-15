import React, { useState, useEffect } from "react";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Surveys from "./components/Surveys";
import MySurveyCreator from "./components/survey-creator";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [state, setState] = useState({ employees: [] });

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch("/api/employees");
      const data = await response.json();

      setState({ ...state, employees: data._embedded.employees });
    }

    fetchEmployees();
  }, []);

  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/employees">Employees</Link>
              </li>
              <li>
                <Link to="/surveys">Surveys</Link>
              </li>
              <li>
                <Link to="/survey-creator">Survey creator</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/survey-creator">
            <MySurveyCreator />
          </Route>
          <Route path="/employees">
            <Employees employees={state.employees} />
          </Route>
          <Route path="/surveys">
            <Surveys />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
