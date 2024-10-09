import Image from "next/image";
import "../public/css/globals.css";
import { useState } from "react";

//Importing Components
import OptionSidebar from '../app/components/sideBar/OptionSidebar';
import YourInfo from '../app/components/userSelections/YourInfo';
import Summary from '../app/components/userSelections/Summary';
import SelectPlan from '../app/components/userSelections/SelectPlan';
import AddOns from "../app/components/userSelections/AddOns";





export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    plan: "",
    addons: [],
  });

  const goToNextStep = () => {
    console.log("Current Step: ", currentStep)
    if (currentStep >= 4) {
      setCurrentStep(4)
      return;
    }
    setCurrentStep(currentStep + 1)
  };
  const goToPreviousStep = () => {
    if (currentStep <= 1) {
      setCurrentStep(1);
      return;
    }
    setCurrentStep(currentStep - 1);
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevData => ({
      ...formData,
      [name]: value,
    }));
  }



  return (
    <div className="formContainer">
      <div className="formBox">
        <OptionSidebar />
        {currentStep === 1 && <YourInfo goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />}
        {currentStep === 2 && <SelectPlan goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep}  />}
        {currentStep === 3 && <AddOns goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep}  />}
        {currentStep === 4 && <Summary goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep}  />}

      </div>

    </div>
  );
}
