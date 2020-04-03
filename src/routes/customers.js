const Customer = require('../models/Customer');

exports.get = async () => {
  try {
    const items = await Customer.find();
    return items;
  } catch (err) {
    return {
      msg: 'No customer found',
    };
  }
};

exports.create = async customer => {
  const newCustomer = new Customer({ ...customer });

  try {
    const item = await newCustomer.save();
    return item;
  } catch (err) {
    return {
      msg: err,
    };
  }
};
