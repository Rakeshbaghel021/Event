import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

function People() {
  return (
    <div>
      <div>
        <div>
          <TextField
            label="Number of People"
            margin="normal"
            variant="outlined"
            color="secondary"
          />
        </div>
        <div>
          <TextField
            label="Amount"
            margin="normal"
            variant="outlined"
            color="secondary"
          />
        </div>

        <Button variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}

export default People;
