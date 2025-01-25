require("dotenv").config();
const express = require("express");
const db = require("./models");
const tradesmanRoutes = require('./app/routes/tradesman.routes');
const clientRoutes = require('./app/routes/client.routes')

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT: ", PORT);
});

app.get("/status", (request, response) => {
  const status = {
    status: "Running",
  };
  response.send(status);
});

app.use('/api/tradesmen', tradesmanRoutes);
app.use('/api/clients', clientRoutes);
