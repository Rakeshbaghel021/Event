import React, { useState } from "react";
import { Link } from "react-router-dom";

function Event() {
  const [name, setname] = useState("");
  const onhandleChange = (e) => {
    const { name } = e.target.value;
  };

  const handleSumbit = () => {
    setname();
  };
  return (
    <div>
      <h1>Name</h1>
      <input
        type="text"
        name="name"
        onChange={onhandleChange}
        placeholder="name"
      />
      <Link to="/people">
        <button onClick={handleSumbit}>Next</button>
      </Link>
    </div>
  );
}

export default Event;
