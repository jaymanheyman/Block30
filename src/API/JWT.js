const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key_here';

const user = {
  id: 123,
  username: 'exampleuser'
};

const token = jwt.sign(user, secretKey, { expiresIn: '1h' });


console.log('Generated Token:', token);

