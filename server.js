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
    { name: 'message', maxCount: 1 },
    { name: 'picture', maxCount: 16 }  // Handle up to 16 file uploads with the name 'picture'
]), async (req, res) => {
    // Extract the text fields and the uploaded files
    const { name, email, phone, message } = req.body;
    const pictures = req.files['picture'];  // Get the uploaded files

    // Debugging: Log the form data
    console.log('Form data received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);
    console.log('Files:', pictures);

    // If no files are uploaded, return a 400 error
    if (!pictures || pictures.length === 0) {
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
        subject: `Contact form submission from ${name}`,
        html: `<p>You have a new contact form submission</p><br>
               <p><strong>Name:</strong> ${name}</p><br>
               <p><strong>Email:</strong> ${email}</p><br>
               <p><strong>Phone:</strong> ${phone}</p><br>
               <p><strong>Message:</strong> ${message}</p><br>`,
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
