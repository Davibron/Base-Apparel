import React, { useState } from "react"

export default function Description() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    alert('You entered: ' + inputValue);
  };

  return (
    <div className="description">
      <div className="base-apparel">
        <img src="../images/logo.svg" alt="" />
      </div>
      <h1><span>W E ' R E</span> COMING SOON</h1>
      <h4> 
        Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
      </h4>
      <div className="email">
        <input
          type="email"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Email Address"
         />
        <button onClick={handleButtonClick}>
          <img src="../images/icon-arrow.svg" alt="" />
        </button>
      </div>
      
    </div>
  )
}