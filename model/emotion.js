const {bdd} = require('./connexion.js');
const {DataTypes} = require('sequelize');
const Post = require("./post.model.js");

const Emotion = bdd.define(
    'emotion',
    {
        authorId: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        reaction: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Post,
                key: 'id'
            }
        }
    }
);

module.exports = Emotion;