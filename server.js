const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controller/authController');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Routes
app.get('/', (req, res) => {
    res.redirect('login');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});
app


app.post('/login',authController.loginUser);
app.post('/register',authController.registerUser);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

