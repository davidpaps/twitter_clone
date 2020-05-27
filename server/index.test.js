const app = require("./index");
const supertest = require("supertest");
const request = supertest(app);
const pool = require("./testDB");

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
