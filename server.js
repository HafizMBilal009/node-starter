const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');

const app = express();

app.use(morgan('dev'));

app.use('/api', apiRouter);

app.listen(3000, () => console.log('Server started.'));
