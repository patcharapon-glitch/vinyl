const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/user.json');

// Read users from JSON file
const getUsers = () => {
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

// Write users to JSON file
const saveUsers = (users) => {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

// Add a new user
const addUser = (username, password) => {
    const users = getUsers();
    users.push({ username, password });
    saveUsers(users);
};

// Find a user by username
const findUserByUsername = (username) => {
    const users = getUsers();
    return users.find(user => user.username === username);
};

module.exports = { addUser, findUserByUsername };