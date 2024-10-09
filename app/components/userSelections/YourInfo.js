import React from 'react'

function YourInfo({goToNextStep, goToPreviousStep}) {


  
  return (
    <div className='userInfo'>
        <div className='selectorTitle'>
          <h2 >Personal Info</h2>
          <p> Please Provide your name, email address and Phone number</p>
        </div>
        <div>
          <form>
            <div className='userInput'>
              <label htmlFor="name">name</label>
              <input type="name" id="name" name="name" />
            </div>
            <div className='userInput'>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="email" />
            </div>
            <div className='userInput'>
              <label htmlFor="number">Phone Number</label>
              <input type="number" id="number" name="number" />
            </div>

          </form>
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

export default YourInfo