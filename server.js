const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const API_KEY = require('./apiKey');

// Configure multer to handle text fields and file uploads
const upload = multer({
    limits: {
        fileSize: 64 * 1024 * 1024, // Limit each file to 64 MB
        files: 16, // Allow up to 16 files
    },
    storage: multer.memoryStorage(), // Store files in memory for easy access
});

const app = express();

// Enable CORS (if you need to allow cross-origin requests)
app.use(cors());

// Middleware to parse incoming JSON data
app.use(express.json());

// POST endpoint for contact form submission
app.post('/api/contactapi', upload.fields([
    { name: 'name', maxCount: 1 },
    { name: 'email', maxCount: 1 },
    { name: 'phone', maxCount: 1 },
    { name: 'time', maxCount: 1 },
    { name: 'installationPower', maxCount: 1 },
    { name: 'installationPowerOwn', maxCount: 1 },
    { name: 'installationType', maxCount: 1 },
    { name: 'installationObject', maxCount: 1 },
    { name: 'otherInstallationObject', maxCount: 1 },
    { name: 'objectPurpose', maxCount: 1 },
    { name: 'otherObjectPurpose', maxCount: 1 },
    { name: 'expiration', maxCount: 1 },
    { name: 'budget', maxCount: 1 },
    { name: 'guarantee', maxCount: 1 },
    { name: 'support', maxCount: 1 },
    { name: 'message', maxCount: 1 },
    { name: 'picture', maxCount: 16 }  // Handle up to 16 file uploads with the name 'picture'
]), async (req, res) => {
    // Extract the text fields and the uploaded files
    const { name, email, phone, time, installationPower, installationPowerOwn, installationType, installationObject, otherInstallationObject, objectPurpose, otherObjectPurpose, expiration, budget, guarantee, support, message } = req.body;
    const pictures = req.files['picture'];  // Get the uploaded files

    // Debugging: Log the form data
    console.log('Form data received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Time:', time);
    console.log('InstallationPower:', installationPower);
    console.log('InstallationPowerOwn:', installationPowerOwn);
    console.log('InstallationType:', installationType);
    console.log('InstallationObject:', installationObject);
    console.log('otherInstallationObject:', otherInstallationObject);
    console.log('ObjectPurpose:', objectPurpose);
    console.log('OtherObjectPurpose:', otherObjectPurpose);
    console.log('Expiration:', expiration);
    console.log('Budget:', budget);
    console.log('Guarantee:', guarantee);
    console.log('Support:', support);
    console.log('Message:', message);
    console.log('Files:', pictures);

    // If no files are uploaded, skip the file attachment process and send the form without files
    if (pictures && pictures.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
    }

    // Create a transporter object using your SMTP details
    const transporter = nodemailer.createTransport({
        host: API_KEY.host,
        port: 465,
        secure: true,
        auth: {
            user: API_KEY.user,
            pass: API_KEY.pass,
        },
    });

    // Set up the email options
    const mailOptions = {
        from: API_KEY.user,
        to: '79278500916@ya.ru',  // The recipient email address
        subject: `Данные формы обратной связи с vostok-gelios.ru от ${name}`,
        html: `<p><strong>ВОСТОК-ГЕЛИОС получил новые данные с формы обратной связи:</strong></p>
               <p><strong>Имя:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Телефон:</strong> ${phone}</p>
               <p><strong>Время:</strong> ${time}</p>
               <p><strong>Мощность установки:</strong> ${installationPower}</p>
               <p><strong>Собственная мощность установки:</strong> ${installationPowerOwn}</p>
               <p><strong>Тип установки:</strong> ${installationType}</p>
               <p><strong>Объект установки:</strong> ${installationObject}</p>
               <p><strong>Другой объект установки:</strong> ${otherInstallationObject}</p>
               <p><strong>Цель установки:</strong> ${objectPurpose}</p>
               <p><strong>Другая цель установки:</strong> ${otherObjectPurpose}</p>
               <p><strong>Срок службы:</strong> ${expiration}</p>
               <p><strong>Бюджет:</strong> ${budget}</p>
               <p><strong>Гарантия:</strong> ${guarantee}</p>
               <p><strong>Поддержка:</strong> ${support}</p>
               <p><strong>Сообщение:</strong> ${message}</p>`,
        attachments: [], // Initialize empty attachments array
    };

    // If pictures are provided, add them as attachments to the email
    if (pictures && pictures.length > 0) {
        pictures.forEach((picture) => {
            mailOptions.attachments.push({
                filename: picture.originalname,
                content: picture.buffer,
            });
        });
    }

    // Send the email
    try {
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
