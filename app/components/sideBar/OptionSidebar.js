import React from 'react'

function OptionSidebar() {
  return (
    <div className='optionContainer'>
              <ul className="numberedList">
        <li>
          <div className="listItem">
            <span className="number selected">1</span>
            <div className="text">
              Step 1
              <br />
              Your Info
            </div>
          </div>
        </li>
        <li>
          <div className="listItem">
            <span className="number">2</span>
            <div className="text">
              Step 2
              <br />
              Select Plan
            </div>
          </div>
        </li>
        <li>
          <div className="listItem">
            <span className="number">3</span>
            <div className="text">
              Step 3
              <br />
              Add-Ons
            </div>
          </div>
        </li>
        <li>
          <div className="listItem">
            <span className="number">4</span>
            <div className="text">
              Step 4
              <br />
              Summary
            </div>
          </div>
        </li>
      </ul>
        
    </div>
  )
}

export default OptionSidebar