const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
