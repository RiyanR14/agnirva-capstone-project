const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { cart, total } = req.body;
    const orderId = Math.floor(Math.random() * 10000);
    res.json({ message: 'Order placed successfully', orderId });
});

module.exports = router;
