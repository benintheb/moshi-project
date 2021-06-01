const express = require("express");
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

const sensorRouter = require("./controller/sensor");

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(cors());

app.use("/api/sensor", sensorRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
