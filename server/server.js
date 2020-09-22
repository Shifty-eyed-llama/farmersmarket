
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

// SERVER REQUIRES ROUTES

require('./config/config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

require('./routes/routes') (app);

app.listen(port, () => console.log(`Yo we're on port ${port} over here`))