import nodemailer, { Transporter } from "nodemailer";

interface SendEmailParams {
  email: string;
  name: string;
  message: string;
}

export const sendEmail = async ({
  email,
  name,
  message,
}: SendEmailParams): Promise<nodemailer.SentMessageInfo> => {
  try {
    const transport: Transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for your submission",
      text: `Hi ${name},\n\nThank you for your message: "${message}" will get back to you soon. \n\nBest regards,\nPrayag Bagthariya`,
    };

    const mailresponse: nodemailer.SentMessageInfo = await transport.sendMail(
      mailOptions
    );
    return mailresponse;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
