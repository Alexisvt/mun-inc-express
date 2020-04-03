const mongoose = require('mongoose');

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/mun', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
