const cors = require("cors");

const router = require("express").Router();

const { spawn } = require("child_process");

const ls = spawn("python3", ["sensor.py"]);

router.route("/:state").post(cors(), (req, res) => {
  if (req.params.state === "on") {
    // const ls = spawn("python3", ["sensor.py"]);
    res.json("turned on");
  } else if (req.params.state === "off") {
    // ls.kill();
    res.json("turned off");
  }
});

module.exports = router;
