import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'

function SelectPlan({goToNextStep, goToPreviousStep, setUserInput}) {
  // const [userDecision, setDecision] = useState("")

  useEffect(() => {
    const userPlan = document.getElementsByClassName('plan')
    const setUserDecision = (plan) => {
      document.addEventListener('click', (e) => {
        if (e.target.parentNode.parentNode.classList.contains('plan')) {
          setDecision(plan)
          e.target.parentNode.parentNode.classList.add('clicked')
        }
      })
        
    }
    setUserDecision("Advanced")
    
    setUserInput({plan: "monthly"})
  }, [])



  useEffect(() => { 
    const toggle = document.getElementById('toggle');
    const monthly = document.getElementsByClassName('monthly');
    const yearly = document.getElementsByClassName('yearly');

    const toggleVisibility = (addClass, removeClass) => {
      Array.from(addClass).forEach(element => element.classList.add('hidden'));
      Array.from(removeClass).forEach(element => element.classList.remove('hidden'));
    };
    
    // Initially set visibility based on the toggle's checked state
    if (!toggle.checked) {
      toggleVisibility(yearly, monthly);  // Show monthly, hide yearly
    } else {
      toggleVisibility(monthly, yearly);  // Show yearly, hide monthly
    }

    // Add event listener for the toggle change
    toggle.addEventListener('click', () => {
      if (toggle.checked) {
        setUserInput({plan: "yearly"})
        toggleVisibility(monthly, yearly);  // Show yearly, hide monthly
      } else {
        setUserInput({plan: "monthly"})
        toggleVisibility(yearly, monthly);  // Show monthly, hide yearly
      }
    });

    // Cleanup the event listener when the component is unmounted
    return () => {
      toggle.removeEventListener('click', () => {});
    };
  }, [])
  
  
  
  
  return (
    <div className='userInfo'>
      <div className='selectorTitle'>
        <h2>Select your plan</h2>
        <p> You have the option of monthly or yearly billing.</p>
      </div>
      <div className="planContainer">
        <div className="plan">
          <div className="planImage">
            <Image src="/images/icon-arcade.svg" alt="Plan 1" width={70} height={70} />
          </div>
          <div className="planDetails">
            <div className="monthly">
              <h3>Basic</h3>
              <p>$9/mo</p>
            </div>
            <div className="yearly">
              <h3>Basic</h3>
              <p>$90/year</p>
            </div>
          </div>
        </div>
        <div className="plan clicked">
          <div className="planImage">
            <Image src="/images/icon-advanced.svg" alt="Plan 1" width={70} height={70} />
          </div>
          <div className="planDetails">
            <div className="monthly">
              <h3>Advanced</h3>
              <p>$12/mo</p>
            </div>
            <div className="yearly">
              <h3>Advanced</h3>
              <p>$120/year</p>
            </div>
          </div>
        </div>
        <div className="plan">
          <div className="planImage">
            <Image src="/images/icon-pro.svg" alt="Plan 1" width={70} height={70} />
          </div>
          <div className="planDetails">
              <div className="monthly">
                <h3>Pro</h3>
                <p>$15/mo</p>
              </div>
              <div className="yearly">
                <h3>Pro</h3>
                <p>$150/year</p>
              </div>
          </div>
        </div>
      </div>
      <div className="timeSwitch">
          <p>Monthly</p>
        <label className="switch">
          <input type="checkbox" id="toggle" />
          <span className="slider round"></span>
        </label>
          <p>Yearly</p>
      </div>
      <div className="ButtonContainer">
        <div>
        <button type="submit" onClick={goToPreviousStep}>Go Back</button>
        </div>
        <div>
        <button type="submit" onClick={goToNextStep}>Next Step</button>
        </div>
      </div>
    </div>
  )
}

export default SelectPlan