import React from "react";
import { Link } from "react-router-dom";

function Vendor() {
  return (
    <div>
      <h1>Primary Vendor</h1>
      <input type="text" placeholder="name" />
      <Link to="/people">
        <button>Back</button>
      </Link>
      <button>Submit</button>
    </div>
  );
}

export default Vendor;
