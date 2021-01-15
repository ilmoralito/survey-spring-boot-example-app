import React, { useState, useEffect } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import { useParams, withRouter } from "react-router-dom";
import { find } from "../../api/survey";

function Answers({ form }) {
  // const [survey, setSurvey] = useState("");
  const { id } = useParams();

  function onComplete(survey, options) {
    console.log("Survey results: " + JSON.stringify(survey.data));
  }
  // useEffect(() => {
  //   async function fetchSurveyBy(id) {
  //     const data = await find(id);
  //     console.log(data);
  //     setSurvey(data);
  //   }
  //   console.log(id);
  //   fetchSurveyBy(id);
  // }, []);
  console.log(form);
  const model = new Survey.Model(form.form);
  console.log(model);
  return (
    <div>
      <h1>Answer</h1>
      <h2>Current id is: {id}</h2>
      <Survey.Survey model={model} onComplete={onComplete} />
    </div>
  );
}

export default withRouter(Answers);
