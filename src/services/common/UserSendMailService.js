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
        subject: 'New Email from your API',
        text: req.body.message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Could not send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
};


module.exports=UserSendEmailService;