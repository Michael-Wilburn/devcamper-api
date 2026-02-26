const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({path: `./config/config.env`});

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

const app = express();
app.listen(PORT, () => {
    console.log(`Running on ${ENV} mode on port ${PORT}`);
})