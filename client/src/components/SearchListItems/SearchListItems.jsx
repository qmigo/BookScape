import React from 'react'
import './searchListItems.css'

const SearchListItems = () => {
  return (
    <div className='searchListItems'>
      <div className="resultImg">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/87428762.webp?k=b3c5dd1a44523ec77c3a497ffc3540eebde08c1e9f3a71448c4de31ff3056f33&o=&s=1" alt="7-seasons" />
      </div>
      <div className="resultDescription">
        <b>7 Seasons Appartment </b>
        
        <p>Featuring a 24-hour reception, the 7Seasons Apartments offers you spacious 1- to 3-bedroom apartments in the heart of Budapest, only 328 feet from Deak Ferenc tér, which is a major public transport..</p>
      </div>
      <div className="resultDetails">
        <span>
            <b>Excellent</b>
            <b>8.9</b>
        </span>
        <span>Rs. 112 </span>
        <button>See Availibility</button>
      </div>
    </div>
  )
}

export default SearchListItems
