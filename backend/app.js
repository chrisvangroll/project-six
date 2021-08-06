const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use("/api/stuff", (req, res, next) => {
    const stuff = [
        {
            _id: "kldksfj;ladsjf",
            title: "My first thing",
            description: "Description of first thing",
            imageUrl: "https://product-images.weber.com/Grill-Images/Charcoal/62010179B_1800x1800.png?auto=compress,format&fit=fill&h=950&w=1000&trim=color&trimtol=10&bg=0FFF&pad=50",
            price: "4599",
            userId: "kaldsfj",
        },

        {
            _id: "adsfasd;ladsjf",
            title: "My second thing",
            description: "Description of second thing",
            imageUrl: "https://cdn.shopify.com/s/files/1/0773/9113/products/Willow3SeaglassRelaxed_2000x.jpg?v=1627983276",
            price: "4000",
            userId: "kaewqrew",
        }
    ]
    res.status(200).json(stuff);
});


module.exports = app;