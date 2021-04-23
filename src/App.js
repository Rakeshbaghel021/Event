import "./App.css";
import Event from "./components/Event";
import People from "./components/People";
import Vendor from "./components/Vendor";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/event">
            <Event />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route exact path="/vendor">
            <Vendor />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
