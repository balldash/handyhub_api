const express = require('express');
const db = require('./models');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT: ", PORT);
});


app.get("/status", (request, response) => {
    const status = {
        "status": "Running"
    };

    response.send(status);
});
