const bcrypt = require("bcrypt");
const Post = require("../model/post.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();


// - GET /posts : liste de tous les messages
exports.getAll = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: "Erreur 500 : " + error.message });
    }
};

// - GET /posts/:id : détail d’un message
exports.getId = async (req, res) => {
    try {
        const product = await Post.findOne({ where: { id: req.params.id } });
        if (!product) {
            return res.status(404).json({ message: "PNF (Post not found)!" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: "Erreur 500 : " + error.message });
    }
};

// - DELETE /messages/:id
exports.delete = async (req, res) => {
    try {
        const post = await Post.findOne({ where: { id: req.params.id } });
        if (!post) {
            return res.status(404).json({ message: "PNF (Post not found)!" });
        }
        if (post.authorId !== req.body.authorId) {
            return res.status(403).json({ message: "Imposteur !" });
        }
        await Post.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Post supprimé !" });
    } catch (error) {
        res.status(500).json({ error: "Erreur 500 : " + error.message });
    }
};

// - PUT /posts/:id
exports.update = async (req, res) => {
    try {
        const post = await Post.findOne({ where: { id: req.params.id } });
        if (!post) {
            return res.status(404).json({ message: "PNF (Post not found)!" });
        }
        await post.update(req.body);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: "Erreur 500 : " + error.message });
    }
};

// - POST /posts: publier un message
exports.create = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: "Erreur 500 :(  : " + error.message });
    }
};