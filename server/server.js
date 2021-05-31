const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

const sensorRouter = require("./controller/sensor");

app.use("/api/sensor", sensorRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
