module.exports=({name,number,email,dpt})=>{
  

    return`
    <html>
        <head>
            <title>Employee</title>
            
        </head>
        <header> Datum:</header>
        <body>
            <p>Name:${name} </p>
            <p>Phone number:${number}</p>
            <p>email:${email}</p>
            <p>department:${dpt}</p>
        </body>
    </html>`

}