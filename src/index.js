import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import EventContext from "./EventContext";

ReactDOM.render(
  <EventContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </EventContext>,
  document.getElementById("root")
);
