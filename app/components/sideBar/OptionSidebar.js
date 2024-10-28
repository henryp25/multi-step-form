import { useAmp } from 'next/amp'
import React from 'react'
import { useEffect } from 'react'

function OptionSidebar({currentStep}) {

  useEffect(() => {
    const listItems = document.querySelectorAll('.numberedList li');
    listItems.forEach((item, index) => {
      if (index + 1 === currentStep) {
        item.querySelector('.number').classList.add('selected');
      } else {
        item.querySelector('.number').classList.remove('selected');
      }
    });
  }, [currentStep]);


  return (
    <div className='optionContainer'>
              <ul className="numberedList">
        <li>
          <div className="listItem">
            <span className="number selected">1</span>
            <div className="text">
              <div id='stepNumber'>
                Step 1
              </div>
              <div id='stepName'>
               Your Info
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="listItem">
            <span className="number">2</span>
            <div className="text">
             <div id='stepNumber'>
              Step 2
              </div>
              <div id='stepName'>
              Select Plan
              </div>  
            </div>
          </div>
        </li>
        <li>
          <div className="listItem">
            <span className="number">3</span>
            <div className="text">
              <div id='stepNumber'>
                Step 3
                </div>
              <div id='stepName'>
                Add-Ons
                </div>  
              </div>
            </div>
        </li>
        <li>
          <div className="listItem">
            <span className="number">4</span>
          <div className="text">
            <div id='stepNumber'>
              Step 4
            </div>
            <div id='stepName'>
              Summary
            </div>
           </div>
          </div> 
        </li>
      </ul>
        
    </div>
  )
}

export default OptionSidebar