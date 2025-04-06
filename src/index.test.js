const request = require("supertest");
const app = require("./index"); // export app from index.js

describe("GET /", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});
