import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

type ResponseData = {
  submitted: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${req.body.name} <${req.body.email}>`,
      to: "gusfonseca.dev@gmail.com",
      subject: "CONTATO FREELANCER",
      text: req.body.message,
    };

    const emailRes = await transporter.sendMail(mailOptions);

    console.log(emailRes);

    res.status(200).json({ submitted: true });
  } catch (err: any) {
    res.status(500).json({
      submitted: false,
    });
  }
}
