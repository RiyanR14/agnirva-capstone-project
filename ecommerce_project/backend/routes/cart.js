const express = require('express');
const router = express.Router();

let cart = [];

router.post('/', (req, res) => {
    const product = req.body;
    cart.push(product);
    res.json({ message: 'Product added to cart', cart });
});

router.get('/', (req, res) => {
    res.json(cart);
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    cart = cart.filter(item => item.id !== id);
    res.json({ message: 'Product removed from cart', cart });
});

module.exports = router;
