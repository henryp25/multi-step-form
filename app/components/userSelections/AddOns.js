import React from 'react'

function AddOns({goToNextStep, goToPreviousStep}) {
  return (
    <div className='userInfo'>
      <div className="ButtonContainer">
        <button type="submit" onClick={goToPreviousStep}>Go Back</button>
      </div>
      <div>
        <button type="submit" onClick={goToNextStep}>Next Step</button>
      </div>
    </div>
  )
}

export default AddOns