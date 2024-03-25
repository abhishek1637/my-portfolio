// functions/sendEmail.js

const nodemailer = require('nodemailer');
// const smtpTransport = require('nodemailer-smtp-transport');
const xoauth2 = require('xoauth2');

exports.handler = async function (event, context) {
  const { firstName, lastName, email, phone, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
      xoauth2: xoauth2.createXOAuth2Generator({
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      })
    },
    tls: {
      ciphers: 'SSLv3', // You can set the required cipher here
    },
  });

  const sendEmailId = process.env.EMAIL_USER;

  // Compose email
  const mailOptions = {
    from: `${firstName} ${lastName}`,
    to: sendEmailId,
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
      body: JSON.stringify({ statusCode: 200, message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ statusCode: 500, error: 'Failed to send email' }),
    };
  }
};
