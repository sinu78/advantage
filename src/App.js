import { useState } from "react";
import Home  from "./ components/step-1/index";
import StepThree  from "./ components/step-3/index";
import StepFour  from "./ components/step-4/index";
import StepFive  from "./ components/step-5/index";


function App() {
  const [isHomePage, setHome] = useState(true)
  const [isStepThree, setStepThree] = useState(false)
  const [isStepFour, setStepFour] = useState(false)
  const [isStepFive, setStepFive] = useState(false)

  const getFormValidation = () => {
    setHome(false)
    setStepThree(true)
    window.scrollTo(0, 0)
  }

  const handleStep3CLick = () => {
    setStepThree(false)
    setStepFour(true)
    window.scrollTo(0, 0)
  }

  const handleStep4CLick = () => {
    setStepFour(false)
    setStepFive(true)
    window.scrollTo(0, 0)
  }

  return (
    <>
    {isHomePage && <Home getFormValidation={getFormValidation}/>}
    {isStepThree && <StepThree handleClick={handleStep3CLick}/>}
    {isStepFour && <StepFour handleClick={handleStep4CLick}/>}
    {isStepFive && <StepFive/>}
    </>
  );
}

export default App;