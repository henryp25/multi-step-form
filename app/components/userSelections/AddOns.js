import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';

function AddOns({goToNextStep, goToPreviousStep, userInput}) {


  const [pageTitle, setPageTitle] = useState("Summary")
  const [onlineService, setOnlineService] = useState("")
  const [storage, setStorage] = useState("")
  const [theme, setTheme] = useState("")


  useEffect(() => {
    setPageTitle(userInput.plan)
    if (userInput.plan === "monthly") {
      setPageTitle("Monthly")
      setOnlineService("+$1/mo")
      setStorage("+$2/mo")
      setTheme("+$2/mo")

    } else if (userInput.plan === "yearly") {
      setPageTitle("Yearly")
      setOnlineService("+$10/yr")
      setStorage("+$20/yr")
      setTheme("+$20/yr")
    }
  }, [])

  return (
    <div className='userInfo'>
      <div className='selectorTitle'>
          <h2>Pick {pageTitle} add-ons</h2>
          <p>Add-ons help enhance gaming experience</p>
      </div>
      <div className="selectionBoxes">
      <div className="addons">
        <div className="addonBox">
        <input type="checkbox" id="onlineService" class="toggle-button"></input>
          <div className="addonContent">
            <h2>Online Service</h2>
            <p>Access to multiplayer games</p>          
          </div>
          <div className="addonCost">
            <h2> {onlineService}</h2>

          </div>
        </div>
      </div>
      <div className="addons">
        <div className="addonBox">
        <input type="checkbox" id="onlineService" class="toggle-button"></input>
          <div className="addonContent">
            <h2>Larger Storage</h2>
            <p>Extra 1TB of cloud save</p>
          </div>
          <div className="addonCost">
            <h2> {storage}</h2>
          </div>
        </div>
      </div>
      <div className="addons">
        <div className="addonBox">
        <input type="checkbox" id="onlineService" class="toggle-button"></input>
          <div className="addonContent">
            <h2>Customizable Profile</h2>
            <p>Custom theme on your profile</p>
          </div>
          <div className="addonCost">
            <h2> {theme}</h2>
          </div>
        </div>
      </div>
      </div>

      <div className="ButtonContainer" id="addonButton">
        <button type="submit" onClick={goToPreviousStep}>Go Back</button>
        <button type="submit" onClick={goToNextStep}>Next Step</button>

      </div>

    </div>
  )
}

export default AddOns