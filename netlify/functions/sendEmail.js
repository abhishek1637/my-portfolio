// functions/sendEmail.js

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const xoauth2 = require('xoauth2');

exports.handler = async function (event, context) {
  const { firstName, lastName, email, phone, message } = JSON.parse(event.body);

  // Create Nodemailer transporter
  // const transporter = nodemailer.createTransport(smtpTransport({
  //   service: 'gmail',
  //   host: 'smtp.gmail.com',
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS,
  //   },
  // }));

  const transporter = nodemailer.createTransport("SMTP", {
    host: "smtp-mail.outlook.com",
    secureConnection: false, 
    port: 587, 
    auth: {
      xoauth2: xoauth2.createXOAuth2Generator({
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
     })
    },
    tls: {
        ciphers:'SSLv3'
    }
});

  const sendEmailId = process.env.EMAIL_USER;

  console.log('username', sendEmailId);
  console.log('password', process.env.EMAIL_PASS);

  // Compose email
  const mailOptions = {
    from: `${firstName} ${lastName}`,
    to: "abhishek.work7050@gmail.com",
    subject: 'Contact Form Submission - Portfolio',
    html: `
      <p>Name: ${firstName} ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
