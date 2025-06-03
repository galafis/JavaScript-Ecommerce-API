/**
 * E-commerce API Server
 * @author Gabriel Demetrios Lafis
 */

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'E-commerce API by Gabriel Lafis',
        version: '1.0.0',
        status: 'running'
    });
});

app.get('/api/products', (req, res) => {
    res.json({
        products: [
            { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
            { id: 2, name: 'Smartphone', price: 599.99, category: 'Electronics' },
            { id: 3, name: 'Book', price: 19.99, category: 'Education' }
        ]
    });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`🚀 E-commerce API running on port ${PORT}`);
    console.log(`📊 Created by Gabriel Demetrios Lafis`);
});

module.exports = app;
