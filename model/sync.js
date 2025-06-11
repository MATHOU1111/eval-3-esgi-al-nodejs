const { bdd } = require('./connexion.js');
const User = require("./../model/user.js");

const sync = async () => {
    await bdd.sync({ force: true });
}

module.exports = sync;