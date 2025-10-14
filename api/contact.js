const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log('Received contact form submission:', req.body);
  
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    console.log('Missing required fields:', { name, email, message });
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
      subject: `Portfolio Contact from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    console.log('Email sent successfully:', result);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Portfolio contact form email error:', error);
    return res.status(500).json({ error: 'Failed to send message: ' + error.message });
  }
};
