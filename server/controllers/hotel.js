const Hotel = require('../model/Hotel')
const CustomAPIError = require('../error/error')

const createHotel = async(req, res)=>{
    
    const hotel = await Hotel.create(req.body)
    res.status(201).json({data:hotel})

}

const updateHotel = async(req, res)=>{

    const hotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {   
            runValidators:true,
            new:true    
        })
    res.status(201).json({data:hotel})

}

const deleteHotel = async(req, res)=>{

    await Hotel.findByIdAndDelete( req.params.id )
    res.status(201).json({data:"success"})

}

const getHotel = async(req, res)=>{
    
    const hotel = await Hotel.findById(req.params.id)
    res.status(200).json({data:hotel })

}

const getHotels = async(req, res)=>{
    
    const hotels = await Hotel.find({ })
    res.status(200).json({count:hotels.length, data:hotels})
}

const countByCity = async(req, res)=>{

}

const countByType = async(req, res)=>{

}
const getHotelRooms = async(req, res)=>{

}

module.exports = {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getHotels,
    countByCity,
    countByType,
    getHotelRooms
}
