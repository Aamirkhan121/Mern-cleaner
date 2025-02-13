const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const dotenv = require('dotenv');
dotenv.config();


const sendEmail = async (req, res) => {

    const { email } = req.body;
    const config={
        service:'gmail',
        auth:{
            user:process.env.EMAIL_USER, //your email
            pass:process.env.EMAIL_PASS //your password
        }    
    }
    const transporter = nodemailer.createTransport(config);
    const mailOptions =new Mailgen({ theme: "default", product: { name: "Cleaner",link:"https://mailgen.js/" } });

    const response = {
        body: {
            name: "Cleaner",
            intro: "Welcome to Cleaner! We're very excited to have you on board.",
            action: {
                instructions: "To get started with Cleaner, please click here:",
                button: {
                    color: "#22BC66", // Optional action button color
                    text: "Confirm your account",
                    link: "http://localhost:5173/blogs"
                }
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help."
        }
    };
    const mail = mailOptions.generate(response);
    const message = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Welcome to Cleaner!",
        html: mail
    };
    transporter.sendMail(message, function (err,info) {
        if (err) {
            console.log(err);
            res.status(500).send('Failed to send email')
        } else {
            // console.log(info);
          res.status(200).json({
            message:"Email send successfully",
            data:info
          })
        }
    });
res.send('Email sent successfully')
}
module.exports =  sendEmail 
