import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL as string,
    pass: process.env.PASSWORD as string,
  },
});

let mailOptions = {
  from: process.env.EMAIL as string,
  to: "judywambui620@gmail.com",
  subject: "Sending Email using Node.js",
  html: `
  <div>
    <h1> GOOD AFTERNOON</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
     incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercit</p>
 </div>
    `,
  attachments: [
    {
      filename: "test.txt",
      content: "That was easy peasy",
    },
  ],
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
