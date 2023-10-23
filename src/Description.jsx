import React from "react"

export default function Description() {
  return (
    <div className="description">
      <div className="base-apparel">
        <h3>BASE APPAREL</h3>
      </div>
      <h1>WE'RE COMING SOON</h1>
      <h4> 
        Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
      </h4>
      <div className="email">
        <input type="text" />
        <button>
          <img src="../images/icon-arrow.svg" alt="" />
        </button>
      </div>
      
    </div>
  )
}