import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import dotenv from 'dotenv';
dotenv.config();

export async function POST(request: NextRequest) {

  const { name, email, content } = await request.json();
  console.log(email);
  console.log(name);
  console.log(content);
  console.log(process.env.EMAIL);
  console.log(process.env.PASSWORD);
  

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from ${name} (${email})`,
    text: content,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
  // return NextResponse.json('Hello from API!');
  
}