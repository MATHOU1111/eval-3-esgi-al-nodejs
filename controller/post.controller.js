const bcrypt = require("bcrypt");
const Post = require("../model/post.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();


// - GET /posts : liste de tous les messages
exports.getAll = async (req, res) => {
    const posts = await Post.findAll();
    res.status(200).json(posts);
}

// - GET /posts/:id : détail d’un message
exports.getId = async (req, res, next) => {
    let product = await Post.findOne({where: {id: req.params.id}});
    res.status(200).json(product);
}