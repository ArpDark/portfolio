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

  const receiveMailOptions: Mail.Options = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from ${name} (${email})`,
    text: content,
  };
  const sendMailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: email,
    subject: "Message sent",
    text: `Your message has been successfully sent to ${process.env.EMAIL}. You will be receiving a reply soon.\n\nThank you`,
  };

  const receiveMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(receiveMailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(sendMailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    receiveMailPromise();
    sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
  // return NextResponse.json('Hello from API!');
  
}