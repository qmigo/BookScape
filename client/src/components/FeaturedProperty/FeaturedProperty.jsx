import React from 'react'
import './featuredProperty.css'

const FeaturedProperty = () => {
  return (
    <div className='featuredProperty'>
      <div className="featuredPropertyContainer">
        <h1>Home guests love</h1>
        <button>Discover Homes</button>
      </div>
      <div className="propertyCardContainer">
        <div className="propertyCard">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="Apart Hotel Store Misato" className="propertyCardImg" />
            <div className="propertyCardText">
                <h1>Aparthotel Store Misato</h1>
                <p>Old Town, Poland, Krakow</p>
                <p>Starting from Rs. 20, 359</p>
                <span className='rating'>
                    <span>8.7</span>
                    <b>Excellent . 2,096 Reviews</b>
                </span>
            </div>
        </div>
        <div className="propertyCard">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1" alt="6 Continents Apartment" className="propertyCardImg" />
            <div className="propertyCardText">
                <h1>6 Continents Apartment</h1>
                <p>Prague 1. Czech Republic, Prague</p>
                <p>Starting from Rs. 12,113</p>
                <span className='rating'>
                    <span>8.3</span>
                    <b> Very Good . 247 reviews </b>
                </span>
            </div>
        </div>
        <div className="propertyCard">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1" alt="Oriente Place Apartments" className="propertyCardImg" />
            <div className="propertyCardText">
                <h1>Oriente Place Apartments</h1>
                <p>06. TerezVaros, Hungary Budapest</p>
                <p>Starting from Rs. 16,801</p>
                <span className='rating'>
                    <span>8.9</span>
                    <b>Excellent . 1,244 reviews</b>
                </span>
            </div>
        </div>
        <div className="propertyCard">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="7 seasons Apartment" className="propertyCardImg" />
            <div className="propertyCardText">
                <h1>7 Seasons Apartment Spain</h1>
                <p>Madrid City Center, Spain, Madrid</p>
                <p>Starting from Rs. 9,616</p>
                <span className='rating'>
                    <span>8.9</span>
                    <b> Excellent . 9,812 reviews</b>
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperty
