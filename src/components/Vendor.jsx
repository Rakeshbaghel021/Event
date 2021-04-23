import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

function Vendor() {
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

        <Button variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}

export default Vendor;
