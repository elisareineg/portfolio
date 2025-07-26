import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { user_name, user_email, message } = req.body;
  if (!user_name || !user_email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Configure transporter using environment variables
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Elisa's Portfolio <${process.env.SMTP_USER}>`,
      to: 'elisareine.a.goncalves@gmail.com',
      subject: `Portfolio Contact from ${user_name}`,
      replyTo: user_email,
      text: `Name: ${user_name}\nEmail: ${user_email}\n\n${message}`,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Portfolio contact form email error:', error);
    return res.status(500).json({ error: 'Failed to send message.' });
  }
} 