import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { multiEventContext } from "../EventContext";

function People() {
  const { setStep, userData, setUserData } = useContext(multiEventContext);

  return (
    <div>
      <div>
        <div>
          <TextField
            label="Number of People"
            margin="normal"
            value={userData["numberofpeople"]}
            onChange={(e) =>
              setUserData({ ...userData, numberofpeople: e.target.value })
            }
            variant="outlined"
            color="secondary"
          />
        </div>
        <div>
          <TextField
            label="Amount"
            margin="normal"
            value={userData["amount"]}
            onChange={(e) =>
              setUserData({ ...userData, amount: e.target.value })
            }
            variant="outlined"
            color="secondary"
          />
        </div>
        <Button
          style={{ marginRight: ".5rem" }}
          variant="contained"
          color="secondary"
          onClick={() => setStep(1)}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={() => setStep(3)}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default People;
