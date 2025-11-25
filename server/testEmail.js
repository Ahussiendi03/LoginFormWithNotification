require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.BREVO_HOST,
  port: parseInt(process.env.BREVO_PORT),
  secure: false, // TLS uses STARTTLS
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS
  }
});

const mailOptions = {
  from: `"Admin Team" <${process.env.FROM_EMAIL}>`,
  to: 'ahussiendi03@gmail.com', // replace with your email
  subject: 'Test Email from Brevo',
  text: 'This is a test email sent using Brevo SMTP.',
  html: '<p>This is a <b>test email</b> sent using Brevo SMTP.</p>'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error sending email:', error);
  }
  console.log('Email sent:', info.messageId);
});
