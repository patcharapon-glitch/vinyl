const { addUser, findUserByUsername } = require('../model/userModel');

const registerUser = async (req, res) => {
    const { username, password } = req.body;
    if (findUserByUsername(username)) {
    res.send(`
        <p>User already exists. Redirecting to login...</p>
        <script>
            setTimeout(function() {
                window.location.href = '/login';
            }, 1500);
        </script>
    `);
    return;
}
    addUser(username, password);
    res.send(`
        <p>register successfull. Redirecting to login...</p>
        <script>
            setTimeout(function() {
                window.location.href = '/login';
            }, 1500);
        </script>
    `);
    return;
}

const loginUser = (req, res) => {
    const { username, password } = req.body;
    const user = findUserByUsername(username);
    console.log(user);
    if (!user || user.password !== password) {
        return res.status(400).send('Invalid username or password');
    }
    res.send('Login successful');
};

module.exports = { registerUser, loginUser };