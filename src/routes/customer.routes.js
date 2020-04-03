const express = require('express');
const router = express.Router();
const customers = require('./customers');

// GET All customers
router.get('/', (req, res, next) => {
  customers
    .get()
    .then(items => res.send(items))
    .catch(message => res.status(404).json(message));
});

router.post('/', (req, res) => {
  customers
    .create(req.body)
    .then(item => res.status(201).json(item))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
