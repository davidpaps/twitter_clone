const app = require("./index");
const supertest = require("supertest");
const request = supertest(app);

beforeAll(() => {
  process.env.NODE_ENV = "test";
  await pool.query("INSERT INTO tweets (description) VALUES('this is a test tweet') RETURNING *");
});

afterAll(() => {
  pool.query("TRUNCATE TABLE tweets;");
});

describe("Test the view all tweets path", () => {
  test("It should response the GET method", () => {
    return request.get("/tweets").expect(200);
  });
});
