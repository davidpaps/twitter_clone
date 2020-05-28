const app = require("./index");
const supertest = require("supertest");
const request = supertest(app);
const pool = require("./testDb");

beforeAll(() => {
  process.env.NODE_ENV = "test";
});

afterAll(() => {
  pool.query("TRUNCATE TABLE tweets;");
});

it("posts to /tweets", async (done) => {
  await request
    .post("/tweets")
    .send({ description: "test tweet" })

    .then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.body.description).toBe("test tweet");
    });
  done();
});

it("gets tweets from /tweets", async (done) => {
  await request

    .get("/tweets")

    .then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toEqual(1);
    });
  done();
});

it("gets a specific tweet from /tweets/:id", async (done) => {
  const tweet = await request.get("/tweets").then((response) => {
    return response.body[0].tweet_id;
  });
  await request
    .get(`/tweets/${tweet}`)

    .then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.body.description).toEqual("test tweet");
    });
  done();
});

it("updates a tweet", async (done) => {
  const tweet = await request.get("/tweets").then((response) => {
    return response.body[0].tweet_id;
  });

  await request
    .put(`/tweets/${tweet}`)
    .send({ description: "new tweet" })

    .then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toBe("Tweet was updated!");
    });

  const updatedTweet = await request.get("/tweets").then((response) => {
    return response.body[0].description;
  });

  expect(updatedTweet).toBe("new tweet");

  done();
});
