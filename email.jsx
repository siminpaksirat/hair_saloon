// import express from 'express';
// import nodemailer from 'nodemailer';
// import cors from 'cors';
// import dotenv from 'dotenv';
// dotenv.config();


// const app = express();
// app.use(cors());
// app.use(express.json());

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// app.post('/send-email', (req, res) => {
//   const { to, subject, body } = req.body;

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to,
//     subject,
//     text: body,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Email sending failed.');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.send('Email sent successfully!');
//     }
//   });
// });

// app.listen(5000, () => console.log('Server is running on port 5000'));
