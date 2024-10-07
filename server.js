const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const API_KEY = require('./apiKey');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/contactapi', async (req, res) => {
  const { name, email, message, phone, picture } = req.body;

  // Create a transporter object using your domain's SMTP details
  const transporter = nodemailer.createTransport({
    host: API_KEY.host,
    port: 465,
    secure: true,
    auth: {
      user: API_KEY.user,
      pass: API_KEY.pass
    },
  });

  try {
    // Send an email using Nodemailer
    const emailRes = await transporter.sendMail({
      from: API_KEY.user,
      to: '79278500916@ya.ru',
      subject: `Данные формы обратной связи от ${name}`,
      html: `<p>На сайте "ВОСТОК ГЕЛИОС" заполнили форму обратной связи</p><br>
            <p><strong>Имя:</strong> ${name}</p><br>
            <p><strong>Email:</strong> ${email}</p><br>
            <p><strong>Телефон:</strong> ${phone}</p><br>
            <p><strong>Сообщение:</strong> ${message}</p><br>
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
