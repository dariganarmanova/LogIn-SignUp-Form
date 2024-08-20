const express = require('express');
const { connectToDatabase } = require('./mongoose');
const cors = require('cors');
const auth = require('./auth');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectToDatabase();

app.get('/', (req, res) => {
    res.send('Server is running');
});

// Use the auth routes with the `/api` prefix
app.use('/', auth);

app.listen(8003, () => {
    console.log("Server is running on port 8002");
});
