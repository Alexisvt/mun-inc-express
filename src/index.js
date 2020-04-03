const express = require('express');
const customerRoutes = require('./routes/customer');

// Connect to MongoDB
require('./db.connect');

const app = express();

app.use(express.json());

app.use('/customer', customerRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
});

const port = 3000;

app.listen(port, () => console.log('Server running...'));
