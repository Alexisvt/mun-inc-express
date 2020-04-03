const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => console.log(err));
