const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp-mail.outlook.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

app.post('/send-email', async (req, res) => {
  const { name, phone, email, date, package: pkg, themes, message } = req.body;

  const body = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Preferred Date: ${date}`,
    `Package: ${pkg}`,
    `Themes: ${themes || 'None selected'}`,
    `Special Requests: ${message || ''}`
  ].join('\n');

  try {
    await transporter.sendMail({
      from: `"Funtasy Website" <${process.env.SMTP_USER}>`,
      to: 'funtasyland@hotmail.com',
      replyTo: email,
      subject: `Booking Request from ${name}`,
      text: body
    });
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
