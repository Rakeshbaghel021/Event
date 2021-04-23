import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { multiEventContext } from "../EventContext";

function Event() {
  const { setStep, userData, setUserData } = useContext(multiEventContext);
  return (
    <div>
      <div>
        <div>
          <TextField
            label="First name"
            margin="normal"
            variant="outlined"
            color="secondary"
          />
        </div>
        <div>
          <TextField
            label="Last name"
            margin="normal"
            variant="outlined"
            color="secondary"
          />
        </div>
        <div>
          <TextField
            label="Email"
            margin="normal"
            variant="outlined"
            color="secondary"
          />
        </div>

        <Button variant="contained" color="primary" onClick={() => setStep(2)}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Event;
