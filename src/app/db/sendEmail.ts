import nodemailer from "nodemailer";

export const sendEmail = async ({ email, name, message }) => {
  try {
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for your submission",
      text: `Hi ${name},\n\nThank you for your message: "${message}" will get back to you soon. \n\nBest regards,\nPrayag Bagthariya`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
