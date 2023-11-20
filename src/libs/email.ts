import nodemailer from "nodemailer";

interface MailOptions {
  from: string;
  subject: string;
  text: string;
  name: string;
}

export async function sendMail({ from, name, subject, text }: MailOptions) {
  console.log({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  } as any);

  return await transporter.sendMail({
    from: `${name} <onboarding@resend.dev>`,
    to: process.env.DEV_MAIL,
    subject,
    text: `${text}\n\nFrom: ${from}`,
  });
}
