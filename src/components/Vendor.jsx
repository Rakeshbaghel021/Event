import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { multiEventContext } from "../EventContext";

function Vendor() {
  const { setStep, userData, setUserData, submitData } = useContext(
    multiEventContext
  );

  return (
    <div>
      <div>
        <div>
          <TextField
            label="Primary Vendor"
            margin="normal"
            variant="outlined"
            color="secondary"
          />
        </div>
        <div>
          <TextField
            label="Country"
            margin="normal"
            variant="outlined"
            color="secondary"
          />
        </div>
        <Button
          style={{ marginRight: ".5rem" }}
          variant="contained"
          color="secondary"
          onClick={() => setStep(3)}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={submitData}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Vendor;
