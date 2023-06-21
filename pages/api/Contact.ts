import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SECRET_GAMIL,
    pass: process.env.SECRET_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Disable certificate verification
  },
});


const sendEmail = async (name: string, email: string, phoneNumber: string, message: string) => {
  const mailOptions = {
    from: process.env.SECRET_GAMIL,
    to: process.env.SECRET_GAMIL,
    subject: 'Contact Form Submission',
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phoneNumber}</p>
      <p>Message: ${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phoneNumber, message } = req.body.formData;

    try {
      await sendEmail(name, email, phoneNumber, message);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json('Method Not Allowed');
  }
}
