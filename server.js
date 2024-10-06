const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/contactapi', async (req, res) => {
  const { name, email, message, phone, picture } = req.body;

  // Create a transporter object using your domain's SMTP details
  const transporter = nodemailer.createTransport({
    host: 'mail.of-all.world',
    port: 465,
    secure: true,
    auth: {
      user: 'test@of-all.world',
      pass: 'HCHMPLi8lNV-0Ba',
    },
  });

  try {
    // Send an email using Nodemailer
    const emailRes = await transporter.sendMail({
      from: 'test@of-all.world',
      to: '79278500916@ya.ru',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
            <p><strong>Name:</strong> ${name}</p><br>
            <p><strong>Email:</strong> ${email}</p><br>
            <p><strong>Phone:</strong> ${phone}</p><br>
            <p><strong>Message:</strong> ${message}</p><br>
            <p><strong>File:</strong> ${picture}</p><br>`,
    });

    console.log('Message sent successfully:', emailRes.messageId);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
