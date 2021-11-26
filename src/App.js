import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home  from "./ components/step-1/index";
import StepTwo  from "./ components/step-2/index";
import StepThree  from "./ components/step-3/index";
import StepFour  from "./ components/step-4/index";

function App() {
  const [isHomePage, setHome] = useState(true)
  const [isStepTwo, setStepTwo] = useState(false)
  const [isStepThree, setStepThree] = useState(false)
  const [isStepFour, setStepFour] = useState(false)
  const handlehHomeSubmit = (e) => {
    e.preventDefault()
    setHome(false)
    setStepTwo(true)
    window.scrollTo(0, 0)
  }

  const handleStep2CLick = () =>{
    setStepTwo(false)
    setStepThree(true)
    window.scrollTo(0, 0)
  }

  const handleStep3CLick = () => {
    setStepThree(false)
    setStepFour(true)
    window.scrollTo(0, 0)
  }

  const handleStep4CLick = () => {
    window.location = "https://calendly.com/taressh/complimentary?month=2021-11"
  }

  return (
    <>
    {isHomePage && <Home handleSubmit={handlehHomeSubmit}/>}
    {isStepTwo && <StepTwo handleClick={handleStep2CLick}/>}
    {isStepThree && <StepThree handleClick={handleStep3CLick}/>}
    {isStepFour && <StepFour handleClick={handleStep4CLick}/>}
    
      {/* <Router className="App">
        <Routes>
          <Route exact path="/" element={<StepOne/>}/>
          <Route exact path="/step_2" element={<StepTwo/>}/>
          <Route exact path="/step_3" element={<StepThree/>}/>
          <Route exact path="/step_4" element={<StepFour/>}/>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;