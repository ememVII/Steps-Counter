import { useState } from "react";
import Button from "../Button";

const Messages = ["Learn React.js 💙", "Learn Node.js 💚", "Apply for Jobs 💼"];

function Steps() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);
  const msgStep = step - 1;

  // const [stepToggle, setStepToggle] = useState(true)

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(() => !isOpen)}>
        <span className="closeBtn">&times;</span>
      </button>

      {isOpen && (
        <div className="steps">
          <div className="stepNum w-4/5">
            <span className="active">1</span>
            <span className={step >= 2 ? `active` : ""}>2</span>
            <span className={step == 3 ? `active` : ""}>3</span>
          </div>

          <div className="stepMsg">
            <h4 className="my-1 text-2xl uppercase">Step {step}</h4>
            <p className="text-xl">{Messages[msgStep]}</p>
          </div>

          <div className="btns">
            <Button onClick={handlePrev}>◀ Prev</Button>
            <Button onClick={handleNext}>Next ▶</Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Steps;
