
const request = require('request')





const geocode = (address,callback)=>{

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYmluaGFiaWIiLCJhIjoiY2swOWhpdzR5MDg4bjNjcGU5bDVvZzRpcCJ9.87ViRS7B4iA4n5uy0h4vzQ&limit=1'
     request({url,json:true},(error,{body})=>{
  
      if(error){
       
      callback('Enable to connect to the weather app services',undefined)
  
      }
      else if (body.features.length===0){
        callback(errorMsg='Location not found , Try again',undefined)
  
      }else{
  
        callback(undefined,{
          latitude:body.features[0].center[1],
          longitude:body.features[0].center[0],
          loction:body.features[0].place_name
        })
  
      }
  
  
     })
  
  
  }
  
   
  module.exports=geocode

