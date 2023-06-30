const nodemailer = require("nodemailer");
const sendMail= async(req,res)=>{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      //Please enter your email address and password.
      //To send a mail pls run http://localhost:3000/sendmail on your browser or postman.
      user: '',
      pass: '',
    }
  });
  //Please enter your email address and email address of recipient
  var mailOptions = {
    from: '',
    to: '',
    subject: 'Assignment#04-Email a friend assignment',
    text: 'Hi, I am sending an email using Node.js'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports=sendMail;