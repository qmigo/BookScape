import { faCross, faCut, faLeftLong, faLocationDot, faRightLong, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import './hotelPage.css'

const HotelPage = () => {
  const [open, setOpen] = useState(false)
  const [slider, setSlider] = useState(0)

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleSlider = (key)=>{
    setOpen(true)
    setSlider(key)
  }
  const handleLeftBtn = ()=>{
    const rn = slider
    setSlider((rn+1)%photos.length)
  }
  const handleRightBtn = ()=>{
    const rn = slider
    setSlider((rn-1+photos.length)%photos.length)
  }
  
  return (
    <div className='hotelPage'>
      {
      open && <div className="slider">
        <img src={photos[slider].src}></img> 
        <FontAwesomeIcon icon={faLeftLong} className='al fl' onClick={handleLeftBtn}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faRightLong} className='ar fl' onClick={handleRightBtn}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faX} className='ac fl' onClick={()=>{setOpen(false)}}></FontAwesomeIcon>
      </div>
      }
      <div className="hotelTitleContainer">
        
        <div className="description">
          <span>Tower Street Appartments</span>
          <span>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            {'\u00A0'} 5 B Town Mount Kanaro Road, Israel
            </span>
          <span>Excellent location - 500m from Center</span>
          <span>Book a stay over Rs 150 and get a free airport taxi</span>
        </div>
        <button >Reserve or Book Now</button>
      </div>
      <div className="hotelImgContainer">
          {
            photos.map(({src},index)=>{
              return <img key={index} src={src} alt="img" onClick={()=>{handleSlider(index)}}/>
            })
          }
      </div>
      <div className="hotelDescCotainer">
          <div className='primaryDesc'>
          <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
          </div>
          <div className="scheme">
            <p>Perfect for a 9-night stay!</p>
            <p>Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!</p>
            <p><b>Rs 9,945</b>/- (9 nights)</p>
            <button>Reserve or book now</button>
          </div>

      </div>
      
    </div>
  )
}

export default HotelPage
