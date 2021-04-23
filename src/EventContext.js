import React, { useState } from "react";
import App from "./App";

export const multiEventContext = React.createContext();
const EventContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  function submitData() {}

  return (
    <div>
      <multiEventContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
        }}
      >
        <App />
      </multiEventContext.Provider>
    </div>
  );
};

export default EventContext;
