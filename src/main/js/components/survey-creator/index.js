import React, { Component } from "react";
import { save } from "../../api/survey";
import * as Survey from "survey-knockout";
import * as SurveyCreator from "survey-creator";

import "bootstrap/dist/css/bootstrap.css";
import "survey-knockout/survey.css";
import "survey-creator/survey-creator.css";
import "./index.css";

SurveyCreator.StylesManager.applyTheme("bootstrap");

class MySurveyCreator extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const options = { showLogicTab: true };
    const creator = new SurveyCreator.SurveyCreator("creatorElement", options);

    creator.showToolbox = "right";
    creator.showPropertyGrid = "right";
    creator.rightContainerActiveItem("toolbox");

    creator.saveSurveyFunc = async function(saveNo, callback) {
      const data = {
        name: Date.now(),
        form: creator.text.replace(/(\r\n|\n|\r)/gm, "")
      };

      const result = await save(data);

      alert(JSON.stringify(result, null, 2));

      callback(saveNo, true);
    };
  }

  render() {
    return <div id="creatorElement" />;
  }
}

export default MySurveyCreator;
