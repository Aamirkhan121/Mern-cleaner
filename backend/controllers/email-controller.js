const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const dotenv = require('dotenv');
dotenv.config();


const sendEmail = async (req, res) => {

    const { email } = req.body;
   try {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth :{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }})

        const mailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "Cleaner",
                link: "https://mern-cleaner-1.onrender.com/blogs",
            },
        });
        const emailTemplate = {
            body: {
                name: "Cleaner",
                intro: "Welcome to Cleaner! We're very excited to have you on board.",
                action: {
                    instructions: "To get started with Cleaner, please click here:",
                    button: {
                        color: "#22BC66",
                        text: "Confirm your account",
                        link: "https://mern-cleaner-1.onrender.com/blogs",
                    },
                },
                outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
            },
        };
        const emailBody = mailGenerator.generate(emailTemplate);
        const emailText = mailGenerator.generatePlaintext(emailTemplate);
        const message = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Welcome to Cleaner!",
            text: emailText,
            html: emailBody,
        };
        await transporter.sendMail(message);
        res.status(200).send({email});
   } catch (error) {
         console.error('Error sending email:', error);
            res.status(500).send({message: 'Failed to send email. Please try again.'}); 

   }
  
}
module.exports =  sendEmail 

