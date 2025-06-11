const { bdd } = require('./connexion.js');
const Post = require("./../model/post.js");
const Emotion = require("./../model/emotion.js");

const sync = async () => {

    Post.hasMany(Emotion, { foreignKey: 'postId', onDelete: 'CASCADE' });
    Emotion.belongsTo(Post, { foreignKey: 'postId' });


}

module.exports = sync;