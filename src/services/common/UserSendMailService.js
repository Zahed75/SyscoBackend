var nodemailer = require('nodemailer');
const UserSendEmailService=async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "tech.syscomatic@gmail.com",
            pass: "htolqpsalypfpdmg"
        },
    });

    const mailOptions = {
        from: req.body.email,
        to: 'tech.syscomatic@gmail.com',
        subject: req.body.subject,
        text: req.body.text,
        replyTo: req.body.from
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Could not send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully',info);
        }
    });
};


module.exports=UserSendEmailService;