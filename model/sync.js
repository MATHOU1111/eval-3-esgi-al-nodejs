const { bdd } = require('./connexion.js');
const Post = require("./post.model.js");
const Emotion = require("./../model/emotion.js");

const sync = async () => {

    Post.hasMany(Emotion, { foreignKey: 'postId', onDelete: 'CASCADE' });
    Emotion.belongsTo(Post, { foreignKey: 'postId' });

    await bdd.sync({ force: true });
}

module.exports = sync;