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
    setCurrentStep(currentStep + 1)
  };
  const goToPreviousStep = () => setCurrentStep(currentStep - 1);

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
        {currentStep === 1 && <YourInfo />}
        {currentStep === 2 && <SelectPlan />}
        {currentStep === 3 && <AddOns />}
        {currentStep === 4 && <Summary />}
      </div>
      <div>
        <div>
          <button type="submit" onClick={goToPreviousStep}>Go Back</button>
        </div>
        <div>
          <button type="submit" onClick={goToNextStep}>Next Step</button>
        </div>
      </div>
    </div>
  );
}
