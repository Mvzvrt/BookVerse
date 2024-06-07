const express = require('express');
const app = express();
const PORT = 5000; // Choose your desired port

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
