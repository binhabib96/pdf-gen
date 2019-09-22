const request = require('request')

const forecast =(latiude,longtude,callback)=>{

  const  url='https://api.darksky.net/forecast/e2c1f47bf24e9530a48890d3a5095f02/'+latiude+','+longtude+'?units=si'

  request({url,json:true},(error,{body})=>{
      if(error){
          callback('Enable to connect to the weather app services',undefined)
      }else if (body.error){

        callback('could not found the location',undefined)

      }else{
        
      
          callback(undefined,  body.currently.summary+' the tumpreature is '+body.currently.temperature +' chances of rain '+body.currently.precipProbability)
      }
  })
}
module.exports=forecast
