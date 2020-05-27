const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.NODE_ENV == "test" ? 5001 : 5000;
let pool;
if (process.env.NODE_ENV === "test") {
  pool = require("./testDb");
} else {
  pool = require("./db");
}

app.use(cors());
app.use(express.json());

app.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
