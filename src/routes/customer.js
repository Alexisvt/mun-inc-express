const express = require('express');
const router = express.Router();

const Customer = require('../models/Customer');

// GET All customers
router.get('/', (req, res, next) => {
  Customer.find()
    .then(items => res.send(items))
    .catch(err => res.status(404).json({ msg: 'No customer found' }));
});

router.post('/', (req, res) => {
  const newItem = new Customer({
    ...req.body,
  });

  newItem
    .save()
    .then(item => res.redirect('/customer'))
    .catch(err => res.status(500).json({ msg: err }));
});

module.exports = router;
