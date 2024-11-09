const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const API_KEY = require('./apiKey');

// Configure multer to handle text fields and file uploads
const upload = multer();

const app = express();
app.use(cors());

app.post('/api/contactapi', upload.fields([
  { name: 'name', maxCount: 1 },
  { name: 'email', maxCount: 1 },
  { name: 'phone', maxCount: 1 },
  { name: 'message', maxCount: 1 },
  { name: 'picture', maxCount: 1 }  // Handle one file upload
]), async (req, res) => {
  const { name, email, phone, message } = req.body;  // req.body contains the text fields
  const picture = req.files['picture'] ? req.files['picture'][0] : null;  // req.files contains the uploaded file

  // Log to see if the values are correct
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Message:', message);
  console.log('File:', picture);

  // Create a transporter object using your domain's SMTP details
  const transporter = nodemailer.createTransport({
    host: API_KEY.host,
    port: 465,
    secure: true,
    auth: {
      user: API_KEY.user,
      pass: API_KEY.pass,
    },
  });

  try {
    const mailOptions = {
      from: API_KEY.user,
      to: '79278500916@ya.ru',  // The destination email
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
             <p><strong>Name:</strong> ${name}</p><br>
             <p><strong>Email:</strong> ${email}</p><br>
             <p><strong>Phone:</strong> ${phone}</p><br>
             <p><strong>Message:</strong> ${message}</p><br>`,
    };

    // If a file is attached, include it in the email
    if (picture) {
      mailOptions.attachments = [
        {
          filename: picture.originalname,
          content: picture.buffer,
        },
      ];
    }

    const emailRes = await transporter.sendMail(mailOptions);

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
