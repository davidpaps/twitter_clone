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

app.get("/tweets", async (req, res) => {
  const allTweets = await pool.query("SELECT * FROM tweets");
  res.json(allTweets.rows);
});

app.get("/tweets/:id", async (req, res) => {
  const { id } = req.params;
  const tweet = await pool.query("SELECT * FROM tweets WHERE tweet_id = $1", [
    id,
  ]);

  res.json(tweet.rows[0]);
});

app.post("/tweets/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  const newTweet = await pool.query(
    "INSERT INTO tweets (description, user_fk_id) VALUES($1, $2) RETURNING *",
    [description, id]
  );
  res.json(newTweet.rows[0]);
});

app.put("/tweets/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  const updateTweet = await pool.query(
    "UPDATE tweets SET description = $1 WHERE tweet_id = $2",
    [description, id]
  );
  res.json("Tweet was updated!");
});

app.delete("/tweets/:id", async (req, res) => {
  const { id } = req.params;
  const deleteTweet = await pool.query(
    "DELETE FROM tweets WHERE tweet_id = $1",
    [id]
  );
  res.json("Tweet was deleted!");
});

//

app.get("/users", async (req, res) => {
  const allUsers = await pool.query("SELECT * FROM users");
  res.json(allUsers.rows);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const users = await pool.query("SELECT * FROM users WHERE user_id = $1", [
    id,
  ]);
  res.json(users.rows[0]);
});

app.post("/users", async (req, res) => {
  try {
    const { email } = req.body;
    const { username } = req.body;
    const { password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (email, username, password) VALUES($1, $2, $3) RETURNING *",
      [email, username, password]
    );
    if (newUser.rows[0]) {
      res.json(newUser.rows[0]);
    } else {
      res.json("Error");
    }
  } catch (err) {
    res.json("Error");
  }
});

app.post("/users/:username", async (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  const user = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  if (user.rows[0]) {
    let validated = user.rows[0].password === password;
    if (validated) {
      res.json(validated);
    } else {
      res.json("Error");
    }
  } else {
    res.json("Error");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
