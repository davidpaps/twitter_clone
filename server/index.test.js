const app = require("./index");
const supertest = require("supertest");
const request = supertest(app);
const pool = require("./testDb");

describe("CRUD Cycle Endpoints", () => {
  beforeAll(() => {
    process.env.NODE_ENV = "test";
  });

  describe("tweets", () => {
    afterAll(() => {
      pool.query("TRUNCATE TABLE tweets;");
    });

    it("posts a tweet via /tweets", async (done) => {
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

    it("updates a tweet from /tweets/:id", async (done) => {
      const tweetId = await request.get("/tweets").then((response) => {
        return response.body[0].tweet_id;
      });

      await request
        .put(`/tweets/${tweetId}`)
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

    it("deletes a tweet from tweets/:id", async (done) => {
      const tweetId = await request.get("/tweets").then((response) => {
        return response.body[0].tweet_id;
      });

      await request
        .delete(`/tweets/${tweetId}`)

        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.body).toBe("Tweet was deleted!");
        });

      const tweets = await request.get("/tweets").then((response) => {
        return response.body.length;
      });

      expect(tweets).toEqual(0);

      done();
    });
  });

  describe("users", () => {
    beforeAll(() => {
      pool.query("DELETE FROM users WHERE user_id > 0;");
    });

    it("posts a user via /users", async (done) => {
      await request
        .post("/users")
        .send({
          email: "test@test.com",
          username: "username",
          password: "password",
        })

        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.body.email).toBe("test@test.com");
          expect(response.body.username).toBe("username");
          expect(response.body.password).toBe("password");
        });

      done();
    });

    it("gets users from /users", async (done) => {
      await request

        .get("/users")

        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.body.length).toEqual(1);
        });
      done();
    });

    it("gets a specific user from /users/:id", async (done) => {
      const user = await request.get("/users").then((response) => {
        return response.body[0].user_id;
      });
      await request
        .get(`/users/${user}`)

        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.body.email).toEqual("test@test.com");
          expect(response.body.username).toEqual("username");
        });
      done();
    });
  });
});
