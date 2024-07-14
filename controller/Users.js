const nodemailer = require('nodemailer');
const User = require('../models/referModel.js');

const Register = async (req, res) => {
    const { name, email, referrename } = req.body;
    if (!referrename || !name || !email) {
        return res.status(400).json({ msg: "Fill all the fields" });
    }
    try {

        await User.create({
            name: name,
            email: email,
            referrename: referrename,
            referedAt: new Date(),
            updatedAt: new Date()
        });

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,  
                pass: process.env.PASSWORD        
            }
        });

        let htmlMsg = `
            <h2>Hello ${name},</h2>
            <p>Thank you for choosing us.</p>
            <p>${referrename} has referred you to our platform.</p>
            <p>Best regards,</p>
            <p>Accredian's</p>
        `;

        let mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Successful',
            html: htmlMsg
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error occurred while sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.json({ msg: "Successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Failed" });
    }
};

module.exports = { Register };