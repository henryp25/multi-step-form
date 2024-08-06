import Image from "next/image";
import "../public/css/globals.css";

//Importing Components
import OptionSidebar from '../app/components/sideBar/OptionSidebar';
import YourInfo from '../app/components/userSelections/YourInfo';
import Summary from '../app/components/userSelections/Summary';
import SelectPlan from '../app/components/userSelections/SelectPlan';
import AddOns from "../app/components/userSelections/AddOns";





export default function Home() {
  return (
    <div className="formContainer">
      <div className="formBox">
      
        <OptionSidebar />
        <YourInfo />
        <Summary />
        <SelectPlan />
        <AddOns />
      </div>
    </div>
  );
}
