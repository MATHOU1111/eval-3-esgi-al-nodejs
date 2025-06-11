const User = require('../model/user.js');
const bcrypt = require('bcrypt');

const dataset = async () => {
    await User.create({
        email: "mathisdumage@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        nickname: "mathou"
    })
};

module.exports = dataset;