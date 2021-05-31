const router = require("express").Router();

const { spawn } = require("child_process");

const ls = spawn("python3", ["sensor.py"]);

router.route("/:state").post((req, res) => {
  if (req.params.state === "on") {
    const ls = spawn("python3", ["sensor.py"]);
  } else if (req.params.state === "off") {
    ls.kill();
  }
});

module.exports = router;
