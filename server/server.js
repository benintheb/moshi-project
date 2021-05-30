const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

const { PythonShell } = require("python-shell");

let options = {
  scriptPath: "./controller/",
  args: ["value1", "value2", "value3"],
};
PythonShell.run("sensor.py", options, function (err, data) {
  if (err) throw err;
  console.log(data);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
