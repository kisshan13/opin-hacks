import nodemailer from "nodemailer";
import { config } from "dotenv";
import { MailOptions } from "nodemailer/lib/json-transport";

config();

const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

if (!MAIL_USER || !MAIL_PASSWORD) {
  throw new Error("Mail credentials not included");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: false,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: true,
  },
});

interface InitiateOtpFields {
  email: string;
  otp: number;
}

const generateOptions = (data: InitiateOtpFields): MailOptions => {
  return {
    from: MAIL_USER,
    to: data.email,
    subject: "VERIFICATION CODE",
    text: `${data.otp}`,
  };
};

const initiateOtp = async (data: InitiateOtpFields) => {
  const fields = generateOptions(data);

  try {
    await transporter.sendMail(fields);
    console.log("OTP SENT");
  } catch (error) {
    console.log("FAILED TO SENT OTP");
  }
};

const EmailService = {
  initiateOtp,
};

export default EmailService;
