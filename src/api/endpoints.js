import client from "./client";

// Placeholder endpoints. Each returns the Axios promise so callers handle the response.
export const signUp = (username, password) => client.post("/signup", { username, password });
export const signIn = (username, password) => client.post("/signin", { username, password });
export const addToCart = (productId, quantity = 1) => client.post("/addtocart", { productId, quantity });
export const placeOrder = (items, total) => client.post("/placeorder", { items, total });

// Pull a readable message out of a failed Axios call.
export const getErrorMessage = (err) =>
  err.response?.data?.message || err.message || "Something went wrong. Please try again.";
