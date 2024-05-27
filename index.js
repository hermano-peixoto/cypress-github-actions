
const express = require('express');
const app = express();
const port = 3000;

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ]);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
