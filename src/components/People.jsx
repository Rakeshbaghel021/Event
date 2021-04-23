import React from "react";
import { Link } from "react-router-dom";

function People() {
  return (
    <div>
      <h1>Number of People</h1>
      <input type="text" placeholder="name" />
      <Link to="/event">
        <button>Back</button>
      </Link>
      <Link to="/vendor">
        <button>Next</button>
      </Link>
    </div>
  );
}

export default People;
