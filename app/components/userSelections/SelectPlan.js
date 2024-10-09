import React from 'react'
import Image from 'next/image'

function SelectPlan({goToNextStep, goToPreviousStep}) {
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
            <h3>Arcade</h3>
            <p>$9/mo</p>
          </div>
        </div>
        <div className="plan">
          <div className="planImage">
            <Image src="/images/icon-advanced.svg" alt="Plan 1" width={70} height={70} />
          </div>
          <div className="planDetails">
            <h3>Advanced</h3>
            <p>$12/mo</p>
          </div>
        </div>
        <div className="plan">
          <div className="planImage">
            <Image src="/images/icon-pro.svg" alt="Plan 1" width={70} height={70} />
          </div>
          <div className="planDetails">
            <h3>Pro</h3>
            <p>$15/mo</p>
          </div>
        </div>
      </div>
      <div className="timeSwitch">
        <div>
          <p>Monthly</p>
        </div>
        <div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div>
          <p>Yearly</p>
        </div>
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