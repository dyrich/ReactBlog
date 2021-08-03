const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use('/api/users/register', require('./routes/api/users/register'));
app.use('/api/users/login', require('./routes/api/users/login'));
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`server started on port : ${port}`);
