const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!', timestamp: new Date().toISOString() });
});

// Email endpoint
app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', req.body);
  
  const { user_name, user_email, message } = req.body;
  
  if (!user_name || !user_email || !message) {
    console.log('Missing required fields:', { user_name, user_email, message });
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Log environment variables (without password)
  console.log('SMTP Configuration:', {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    user: process.env.SMTP_USER,
    hasPassword: !!process.env.SMTP_PASS
  });

  // Configure transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    console.log('Attempting to send email...');
    const result = await transporter.sendMail({
      from: `Elisa's Portfolio <${process.env.SMTP_USER}>`,
      to: 'elisareine.a.goncalves@gmail.com',
      subject: `Portfolio Contact from ${user_name}`,
      replyTo: user_email,
      text: `Name: ${user_name}\nEmail: ${user_email}\n\n${message}`,
    });
    console.log('Email sent successfully:', result);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Portfolio contact form email error:', error);
    return res.status(500).json({ error: 'Failed to send message: ' + error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment variables loaded:', {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_SECURE: process.env.SMTP_SECURE,
    SMTP_USER: process.env.SMTP_USER,
    hasPassword: !!process.env.SMTP_PASS
  });
}); 