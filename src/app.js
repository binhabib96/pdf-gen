const express = require('express')
const path=require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const pdfTemplate = require('../docs/index');



const app = express()
const port = process.env.PORT || 3000
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//dfine paths for express config
const pathTopublic = path.join(__dirname,'../public')
const viewsPath= path.join(__dirname,'../tamplets/views')
const partslsPath = path.join(__dirname,'../tamplets/partsls')


//handlnbars setup
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partslsPath)

app.use(express.static(pathTopublic)) // => express a static html pages and css and javascripts


app.get('/pdf-gen',(req,res)=>{

    res.render('index')
})

app.post('/pdf-gen',urlencodedParser,(req,res)=>{

    pdf.create(pdfTemplate(req.body), {}).toFile(`Documents/employee ${req.body.name}.pdf`, (err) => {
        if(err) {
            res.send(Promise.reject());
        }
        

        res.render('index')

       
      
     
    });
   


})


app.listen(port,()=>{
    console.log('server is up ' +port)
})