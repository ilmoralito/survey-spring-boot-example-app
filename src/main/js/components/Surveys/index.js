import React, { useState, useEffect } from "react";
import * as Survey from "survey-react";
import { findAll } from "../../api/survey";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Answers from "../answers";

export default function Surveys() {
  const [surveys, setSurveys] = useState([]);
  const { path } = useRouteMatch();

  useEffect(() => {
    async function fetchSurveys() {
      return await findAll();
    }

    fetchSurveys().then(result => {
      setSurveys(result._embedded.surveys);
    });
  }, []);

  if (!surveys.length) {
    return <h1>No surveys</h1>;
  }

  return (
    <div>
      <h1>Survey</h1>
      <ul>
        {surveys.map(survey => (
          <li key={survey.id}>
            <Link to={`${path}/${survey.id}`}>{survey.name}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route
          path={`${path}/:id`}
          render={({ match }) => (
            <Answers
              form={surveys.find(survey => survey.id === +match.params.id)}
            />
          )}
        />
      </Switch>
    </div>
  );
}
