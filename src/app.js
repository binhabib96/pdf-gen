const express = require('express')
const path=require('path')
const hbs = require('hbs')
const geocode = require('./utlits/geocode')
const forcast = require('./utlits/forecast')



const app = express()
const port = process.env.PORT || 3000

//dfine paths foe express config
const pathTopublic = path.join(__dirname,'../public')
const viewsPath= path.join(__dirname,'../tamplets/views')
const partslsPath = path.join(__dirname,'../tamplets/partsls')


//handlnbars setup
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partslsPath)

app.use(express.static(pathTopublic)) // => express a static html pages and css and javascripts


app.get('',(req,res)=>{

    res.render('index',{
        title:'Wather',
        name:'Mohammed',
        satusHome:'active'
    })
})


app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about',
        name:'Mohammed',
        satusAbout:'active'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help',
        help:'here is the help ',
        satusHelp:'active'
    })
})





app.get('/wather',(req,res)=>{

    if (!req.query.address){
        return res.send({
            error:'you must provide an address!'
        })
    }



geocode(req.query.address,(error,{longitude,latitude,loction} = {})=>{

    if(error){
        
         return res.send({
             error:error
            })

      


    }

    forcast(latitude,longitude,(error,forcastData)=>{
        if(error){
            return console.log({error})
          }

          res.send({
              forcast:forcastData,
              loction:loction
          })
   
      console.log(loction+' '+forcastData)
    })
})



    

})



// another way 
// app.get('',(req,res)=>{
//     res.send('Hello world from backend')
    
// })

// app.get('/help',(req,res)=>{
//     res.send('this is help route')
// })

// app.get('/about',(req,res)=>{
//     res.send('this is about route ')
// })

// app.get('/wather',(req,res)=>{
//     res.send('this is wather page')
// })


app.listen(3000,()=>{
    console.log('server is up')
})