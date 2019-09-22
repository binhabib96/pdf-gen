console.log('load java sicrpt from clint side ')




const watherForm = document.querySelector('form')
const search = document.querySelector('input')
const muscatTitle = document.querySelector('#muscatTitle')
const muscat = document.querySelector('#muscat')
const nyTitle = document.querySelector('#nyTitle')
const ny = document.querySelector('#ny')
const londonTitlt = document.querySelector('#londonTitle')
const london = document.querySelector('#london')
const istubalTitlt = document.querySelector('#istubalTitle')
const istubal = document.querySelector('#istubal')
const uaeTitle = document.querySelector('#uaeTitle')
const uae = document.querySelector('#uae')
const qaterTitle = document.querySelector('#qaterTitle')
const qater = document.querySelector('#qater')
const saudiTitle = document.querySelector('#saudiTitle')
const saudi = document.querySelector('#saudi')
const title = document.querySelector('#title')
const body = document.querySelector('#body')
const errorLocation = document.querySelector('#errorLocation')




fetch('http://localhost:3000/wather?address=muscat').then((response)=> {
response.json().then((data)=>{
  muscatTitle.textContent=data.loction
       muscat.textContent=data.forcast
})
})

fetch('http://localhost:3000/wather?address=qater').then((response)=> {
response.json().then((data)=>{
  qaterTitle.textContent=data.loction
       qater.textContent=data.forcast
})
})


fetch('http://localhost:3000/wather?address=uae ').then((response)=> {
response.json().then((data)=>{
  uaeTitle.textContent=data.loction
       uae.textContent=data.forcast
})
})


fetch('http://localhost:3000/wather?address=Riyadh ').then((response)=> {
response.json().then((data)=>{
  saudiTitle.textContent=data.loction
       saudi.textContent=data.forcast
})
})


fetch('http://localhost:3000/wather?address=london ').then((response)=> {
response.json().then((data)=>{
  londonTitle.textContent=data.loction
       london.textContent=data.forcast
})
})

fetch('http://localhost:3000/wather?address=new york ').then((response)=> {
response.json().then((data)=>{
  nyTitle.textContent=data.loction
       ny.textContent=data.forcast
})
})










watherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const locatiion = search.value
   title.textContent='plzz wait while we bring the information for you...'
   body.textContent='...'
  

    fetch('http://localhost:3000/wather?address='+locatiion).then((response)=> {

response.json().then((data)=>{
    if (data.error){
      title.textContent=data.error
      console.log('err')

    }else{
        title.textContent=data.loction
        body.textContent=data.forcast

    }
})

})
})