import "./App.css";
import React, { useContext } from "react";
import Event from "./components/Event";
import People from "./components/People";
import Vendor from "./components/Vendor";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { multiEventContext } from "./EventContext";
import DisplayData from "./components/DisplayData";

function App() {
  const { currentStep, finalData } = useContext(multiEventContext);
  function showEvent(step) {
    switch (step) {
      case 1:
        return <Event />;
      case 2:
        return <People />;
      case 3:
        return <Vendor />;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1 style={{ color: "grey", textDecoration: "underline" }}>
          <BeachAccessIcon />
          <span
            style={{
              color: "blue",
              marginRight: ".3rem",
              textDecoration: "none",
            }}
          >
            Event
          </span>
          Based Mangement Systems
        </h1>
        <div className="center-stepper">
          <Stepper
            style={{ width: "18%", margin: "0 auto", alignItems: "center" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showEvent(currentStep)}
        <br />
        {finalData.length > 0 ? <DisplayData /> : ""}
      </header>
    </div>
  );
}

export default App;
