import MockAdapter from "axios-mock-adapter";
import client from "./client";

// Frontend-only mock so you can try the app without a backend.
// Enabled with VITE_USE_MOCK=true. Remove this file when a real API exists.
export function setupMock() {
  const mock = new MockAdapter(client, { delayResponse: 500 });

  mock.onPost("/signup").reply((config) => {
    const { username } = JSON.parse(config.data);
    if (username.toLowerCase() === "taken")
      return [409, { message: "That username is already taken." }];
    return [201, { message: "Account created! Please sign in." }];
  });

  mock.onPost("/signin").reply((config) => {
    const { username, password } = JSON.parse(config.data);
    if (password.length < 4) return [401, { message: "Wrong username or password." }];
    return [200, { message: "Welcome back!", token: "mock.jwt.token", user: { username } }];
  });

  mock.onPost("/addtocart").reply(200, { message: "Added to cart." });
  mock.onPost("/placeorder").reply(200, { message: "Order placed!", orderId: "CHP-" + Date.now() });
}
