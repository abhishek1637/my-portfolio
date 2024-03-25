// functions/sendEmail.js

const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  const { firstName, lastName, email, phone, message } = JSON.parse(event.body);

  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: 'abhishek.work7050@gmail.com',
      pass: process.env.EMAIL_PASS
    }
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
