const express=require('express');
const app= express();
const sendMail= require('./sendMail')

app.listen(3000,()=>{
    console.log('The server is running on PORT 3000');
})

app.get('/',(req,res)=>{
    res.send('I am a server')
});

app.get('/sendmail',sendMail);
// To start te server run http://localhost:3000/ on your browser or terminal.
//to send an mail run http://localhost:3000/sendmail