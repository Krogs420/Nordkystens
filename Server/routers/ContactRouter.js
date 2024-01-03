import {Router} from "express"
import nodemailer from "nodemailer";


const router = Router();


router.get("/mail", async (req, res) => {
  res.status(200).send({ message: "OK"})
})

router.post("/mail", async (req, res) => {
  const { name, mail, message } = req.body;

  try {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
      from: `"Naruto Customer Support" <sasuke@uchiha.dk>`,
      to: `${req.body.name} <${req.body.mail}>`,
      subject: "hej",
      text: req.body.message,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview url:%s", nodemailer.getTestMessageUrl(info));
    res.status(200).send("Message sent successfully!")
  } catch (error) {
    res.status(500).send("Error sending message. Please try again later.");
  }
});

export default router;
