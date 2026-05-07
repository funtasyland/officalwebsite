const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const dns = require('dns');

// Railway containers lack IPv6 egress; force IPv4 DNS resolution so SMTP
// connections don't pick an unreachable AAAA record.
dns.setDefaultResultOrder('ipv4first');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));

// Email transporter
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

console.log('[mail] SMTP config:', {
  host: SMTP_HOST,
  port: SMTP_PORT,
  user: SMTP_USER ? SMTP_USER : '(MISSING)',
  pass: SMTP_PASS ? `(set, length=${SMTP_PASS.length})` : '(MISSING)'
});

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
  requireTLS: true,
  family: 4,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
  logger: true,
  debug: true
});

transporter.verify().then(
  () => console.log('[mail] SMTP verify: OK'),
  (err) => console.error('[mail] SMTP verify FAILED:', err && (err.code || err.message), err)
);

app.post('/send-email', async (req, res) => {
  const { name, phone, email, date, package: pkg, themes, message } = req.body;
  console.log('[mail] /send-email hit, from:', email, 'name:', name);

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
    if (!SMTP_USER || !SMTP_PASS) {
      throw Object.assign(new Error('SMTP credentials missing on server'), { code: 'NO_CREDS' });
    }
    const info = await transporter.sendMail({
      from: `"Funtasy Website" <${SMTP_USER}>`,
      to: 'funtasyland@hotmail.com',
      replyTo: email,
      subject: `Booking Request from ${name}`,
      text: body
    });
    console.log('[mail] sent OK:', info.messageId, info.response);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('[mail] send error:', {
      code: err.code,
      command: err.command,
      responseCode: err.responseCode,
      response: err.response,
      message: err.message
    });
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: {
        code: err.code || null,
        responseCode: err.responseCode || null,
        response: err.response || null,
        message: err.message || null
      }
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
