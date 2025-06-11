const {bdd} = require('./connexion.js');
const {DataTypes} = require('sequelize');

const Post = bdd.define('post', {
    id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true
    },
    authorId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    reactions: {
        type: DataTypes.JSON,
        defaultValue: {}
    }
});

module.exports = Post;