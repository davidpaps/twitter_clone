import Auth from "./auth";

describe("Auth", () => {
  it("Has a starting default of false", () => {
    expect(Auth.isAuthenticated()).toEqual(false);
  });
});
