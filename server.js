//ENVIRONMENTAL VARIABLES//
require('dotenv').config();
const { PORT = 3000, NODE_ENV = 'development' } = process.env;

// MONGO CONNECTION
const mongoose = require('./db/connection');

// CORS
const cors = require('cors');
const corsOptions = require('./configs/cors.js');

// EXPRESS
const express = require('express');
const app = express();

// OTHER IMPORTS
const morgan = require('morgan');

// ROUTER IMPORTS
// like const dogRouter = require("./controllers/dog")
const stateRouter = require('./controllers/state');
const capitolRouter = require('./controllers/capitol');

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// ROUTER FOR TESTING SERVER IS WORKING
app.get('/', (req, res) => {
	res.json({ msg: 'Test port, nothing to see here' });
});

// STATE ROUTES
app.use('/state', stateRouter);
app.use('/capitol', capitolRouter);

// LISTENER
app.listen(PORT, () => {
	console.log(`You are listening on port ${PORT}`);
});
