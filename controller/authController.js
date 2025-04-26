const { addUser, findUserByUsername } = require('../model/userModel');

const registerUser = async (req, res) => {
    const { username, password } = req.body;
    if (findUserByUsername(username)) {
    return res.render('register', { error: 'Already have this username' });
}
    addUser(username, password);
    return res.redirect('/login');
}


const loginUser = (req, res) => {
    const { username, password } = req.body;
    const user = findUserByUsername(username);
    console.log(user);
    if (!user || user.password !== password) {
        return res.status(400).send('Invalid username or password');
    }
    res.redirect('/main');
};

module.exports = { registerUser, loginUser };