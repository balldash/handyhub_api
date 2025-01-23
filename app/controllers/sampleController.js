const User = require('../models/user');

const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send({ error: 'User not found' });
    res.send(user);
}

module.exports = { getUser };