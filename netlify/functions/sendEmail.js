// functions/sendEmail.js

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

exports.handler = async function (event, context) {
  const { firstName, lastName, email, phone, message } = JSON.parse(event.body);

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  }));

  const sendEmailId = process.env.EMAIL_USER;

  console.log('username', sendEmailId);
  console.log('password', process.env.EMAIL_PASS);

  // Compose email
  const mailOptions = {
    from: `${firstName} ${lastName}`,
    to: sendEmailId,
    subject: 'Contact Form Submission - Portfolio',
    text: `
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
