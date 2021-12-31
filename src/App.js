import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Home  from "./ components/step-1/index";
import StepThree  from "./ components/step-3/index";
import StepFour  from "./ components/step-4/index";
import StepFive  from "./ components/step-5/index";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [isHomePage, setHome] = useState(true)
  const [isStepThree, setStepThree] = useState(false)
  const [isStepFour, setStepFour] = useState(false)
  const [isStepFive, setStepFive] = useState(false)
  const headers = { "Content-Type": "multipart/form-data" }
  const handleHomePageSubmit = async (data) => {
    try {
      const {name, email, mobile} = data
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('mobile', mobile);
      const url = "https://advantagefp.in/api/homepage.php"
      const response = await axios.post(url, formData, headers)
      if(response?.data?.status === 200){
        setHome(false)
        setStepThree(true)
        window.scrollTo(0, 0)
      }
    }
    catch (error) {
      error?.message && showError(error.message)
      console.error(error)
    }
  }

  const handleStep3CLick = () => {
    setStepThree(false)
    setStepFour(true)
    window.scrollTo(0, 0)
  }

  const handleStep4Submit = async (data) => {
    try {
      const formData = new FormData();
      for (let item in data) {
        formData.append([item], data[item])
      }
      const url = "https://advantagefp.in/api/form.php"
      const response = await axios.post(url, formData, headers)
      if (response?.data?.status === 200) {
        setStepFour(false)
        setStepFive(true)
        window.scrollTo(0, 0)
      }
    }
    catch (error) {
      error?.message && showError(error.message)
      console.error(error)
    }
  }

  const showError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      });
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      {isHomePage && <Home submitForm={handleHomePageSubmit}/>}
      {isStepThree && <StepThree handleClick={handleStep3CLick}/>}
      {isStepFour && <StepFour submitForm={handleStep4Submit}/>}
      {isStepFive && <StepFive/>}
      
    </>
  );
}

export default App;