const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post('/generate-upi-link', (req, res) => {
    const { name, upi_id, amount } = req.body;

    // Generate UPI Deep Link URL
    const upiLink = `upi://pay?pa=${upi_id}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;

    // Redirect user to UPI App
    res.redirect(upiLink);
});

app.listen(PORT, () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
});
