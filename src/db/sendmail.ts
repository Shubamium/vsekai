"use server";
import { createTransport } from "nodemailer";
// Create a transporter using Gmail SMTP
const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "vicnet.video@gmail.com", // Your Gmail email
    pass: process.env.SMTP, // Use an App Password (not your Gmail password)
  },
});

export async function sendMail(user: string, mail: string, message: string) {
  // Email details
  const mailOptions = {
    from: "vicnet.video@gmail.com",
    to: process.env.SMTP_TARGET,
    subject: `"[Form Submission] ${user} sent from VSEKAI website`,
    text: `Hello, ${user} has submitted a message through the website contact form. \n \n Email: ${mail} \n Message: ${message} `,
  };
  // Send email
  const res = await transporter.sendMail(mailOptions);
  console.log(res);
  if (res.accepted && res.accepted.length > 0) {
    return true;
  } else {
    return false;
  }
}
