const app = require("./index");
const supertest = require("supertest");
const request = supertest(app);

describe("test", () => {
  it("gets the test endpoint", async (done) => {
    const response = await request.get("/tweets");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("pass!");
    done();
  });
});
