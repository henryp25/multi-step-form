import React from 'react'

function Summary({goToNextStep, goToPreviousStep}) {

  return (
    <div className='userInfo'>
        
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

export default Summary