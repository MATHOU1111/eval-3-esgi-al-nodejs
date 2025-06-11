const User = require('../model/user.model.js');
const Post = require('../model/post.model.js');
const bcrypt = require('bcrypt');

const dataset = async () => {
    await User.create({
        email: "mathisdumage@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        nickname: "mathou"
    })

    await Post.create({
        id: "1",
        authorId: "1",
        nickname: "mathou",
        content: "Premier post de mathou"
    })

    await Post.create({
        id: "2",
        authorId: "1",
        nickname: "mathou",
        content: "deuxieme post de mathou"
    })

    await Post.create({
        id: "3",
        authorId: "1",
        nickname: "mathou",
        content: "Troisieme post de mathou"
    })
}

module.exports = {dataset};