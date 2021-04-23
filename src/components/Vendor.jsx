import React, { useContext } from "react";

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
            value={userData["vendor"]}
            onChange={(e) =>
              setUserData({ ...userData, vendor: e.target.value })
            }
            variant="outlined"
            color="secondary"
          />
        </div>
        <div>
          <TextField
            label="Country"
            margin="normal"
            value={userData["country"]}
            onChange={(e) =>
              setUserData({ ...userData, country: e.target.value })
            }
            variant="outlined"
            color="secondary"
          />
        </div>
        <Button
          style={{ marginRight: ".5rem" }}
          variant="contained"
          color="secondary"
          onClick={() => setStep(2)}
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
