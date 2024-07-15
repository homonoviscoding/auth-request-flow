const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const mockUser = {
    username: 'authguy',
    password: 'mypassword',
    profile: {
        firstName: 'Chris',
        lastName: 'Wolstenholme',
        age: 43
    }
};

router.post('/login', (req, res) => {
    const { username, password } = req.body

    try {

        if (username !== mockUser.username || password !== mockUser.password) {
            return res.status(401).json({ error: 'username or password incorrect, try again!' })
        }
        else {
            const payload = { username: mockUser.username }
            const secret = process.env.JWT_SECRET
            const token = jwt.sign((payload), secret, { algorithm: 'HS256' })
            return res.status(200).json({ token: token })
        }
    } catch (error) {
        console.error(error)
    }
});

router.get('/profile', (req, res) => {
  
});


module.exports = router;
