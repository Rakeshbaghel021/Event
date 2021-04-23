import "./App.css";
import Event from "./components/Event";
import People from "./components/People";
import Vendor from "./components/Vendor";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  function showEvent(step) {
    switch (step) {
      case 1:
        return <Event />;
        break;
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
        <h1 style={{ color: "grey" }}>Event Based Mangement System</h1>
        <div className="center-stepper">
          <Stepper
            style={{ width: "18%", margin: "0 auto", alignItems: "center" }}
            activeStep="1"
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
        {showEvent(1)}
      </header>
    </div>
  );
}

export default App;
