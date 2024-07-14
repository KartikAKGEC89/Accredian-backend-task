const User = require('../models/referModel.js');

 const Register = async(req, res) => {
    const { name, email, referrename} = req.body;
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
        res.json({ msg: "Registration Successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Registration Failed" });
    }
}

module.exports = {Register}