import { useState } from "react";
import Button from "../Button";

function DateCounter() {
  const [steps, setSteps] = useState(1);
  const [daysCounter, setDaysCounter] = useState(0);
  // Date
  const date = new Date();
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  // Set Date
  if (steps >= 1) {
    date.setDate(date.getDate() + daysCounter);
  } else date.setDate(date.getDate() - daysCounter);

  // Formatted Date
  const formattedDate = date.toLocaleString("en-US", options);

  // Handle Steps
  const handleStepsDecrement = () => {
    steps > 1 && setSteps((prevStep) => prevStep - 1);
  };
  const handleStepsIncrement = () => {
    setSteps((prevStep) => prevStep + 1);
  };
  // Handle Days Counter
  const handleCounterDecrement = () => {
    setDaysCounter((prevCounter) => prevCounter - steps);
  };
  const handleCounterIncrement = () => {
    setDaysCounter((prevCounter) => prevCounter + steps);
  };

  // Handle Reset
  const handleReset = () => {
    setSteps(1);
    setDaysCounter(0);
  };

  return (
    <div className="dateCounter">
      <div className="daysSteps">
        <Button onClick={handleStepsDecrement}>-</Button>
        <div className="flex-col">
          <h1 className="font-normal">Steps: {steps}</h1>
          <input
            type="range"
            value={steps}
            min={1}
            max={10}
            onChange={(e) => setSteps(Number(e.target.value))}
          />
        </div>
        <Button onClick={handleStepsIncrement}>+</Button>
      </div>

      <div className="daysCounter">
        <Button onClick={handleCounterDecrement}>-</Button>
        <div className="flex-col">
          <h1 className="font-normal">Days Counter: </h1>
          <input
            type="number"
            value={daysCounter}
            onChange={(e) => setDaysCounter(+e.target.value)}
            className="w-20 border-none p-2 outline-none"
          />
        </div>
        <Button onClick={handleCounterIncrement}>+</Button>
      </div>

      <h1 className="text-xl font-bold">
        {daysCounter === 0
          ? "Today is "
          : daysCounter > 0
          ? `${daysCounter} Days from today is `
          : `${Math.abs(daysCounter)} Days ago was `}{" "}
        {formattedDate}
      </h1>
      <Button onClick={handleReset}>Reset Steps</Button>
    </div>
  );
}

export default DateCounter;
