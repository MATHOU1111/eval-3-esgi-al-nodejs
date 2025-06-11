const {bdd} = require('./connexion.js');
const {DataTypes} = require('sequelize');

const Post = bdd.define('post', {
    id: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true
    },
    content: {
        type: DataTypes.TEXT,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Post;