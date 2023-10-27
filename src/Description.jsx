import React, { useState } from "react"

export default function Description() {
  const [inputValue, setInputValue] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const [borderColor, setBorderColor] = useState('');

  const handleButtonClick = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (inputValue.trim() === '' || !emailPattern.test(inputValue)) {
      setShowImage(true);
      setShowDiv(true);
      setBorderColor('red');
    } else {
      setShowImage(false);
      setShowDiv(false);
      setBorderColor('');
    }
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
        <div className="input-container">
          {showImage && (
            <img src="icon-error.svg" className="error-image" />
          )}
          <input
            type="email"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              setShowDiv(false);
              setBorderColor('');
            }}
            placeholder="Email Address"
            style={{ borderColor: borderColor }}
          />
        </div>
        
        <button onClick={handleButtonClick}>
          <img src="../images/icon-arrow.svg" alt="" />
        </button>
        {showDiv && (
        <div className="error-message">
          {inputValue.trim() === ''
            ? 'Input cannot be empty.'
            : 'Please provide a valid email'}
        </div>
      )}
      </div>
      
    </div>
  )
}