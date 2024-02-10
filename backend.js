const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Hardcoded data
const houseData = {
    imageUrls: ["https://photos.zillowstatic.com/fp/fb45396d6d25773f3930d388b5142bce-cc_ft_960.webp","https://photos.zillowstatic.com/fp/efdd03675579bc46b4442a36cf170e7d-cc_ft_960.webp","https://photos.zillowstatic.com/fp/efdd03675579bc46b4442a36cf170e7d-cc_ft_960.webp"],
    lat: "40.777617",
    long: "-89.585493",
    baths: "8",
    beds: "5",
    squareFeet: 8485,
    year: "1960",
    lotSize: 10.47
};

// Enable CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specific HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
    next();
  });

// Endpoint to fetch house data
app.get('/fetchHouse', (req, res) => {
    res.json(houseData);
});

app.get('/', (req, res) => {
    res.json("{}")
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
