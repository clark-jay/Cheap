# CHEAP — React frontend

A minimal e-commerce frontend (React + Vite, React Router, Axios). No backend included:
all API calls point at placeholder endpoints, and an in-browser mock lets you try everything.

## Setup
```bash
npm install
cp .env.example .env     # already provided as .env
npm run dev              # http://localhost:5173
```
Build for production: `npm run build` (preview with `npm run preview`).

## Environment variables
| Variable | Purpose |
|---|---|
| `VITE_API_URL` | Base URL of your real backend (default `http://localhost:8080`) |
| `VITE_USE_MOCK` | `true` = use the mock API in `src/api/mock.js`; `false` = call the real URL |

## Try it with the mock
- Sign up with any username (`taken` returns an error, to show error messages).
- Sign in with any username and a password of 4+ characters.
- Add items on Home, review the Cart, then Place Order.

## Placeholder API contract
| Action | Request | Expected success response |
|---|---|---|
| Create account | `POST /signup` `{username, password}` | `{ message }` |
| Sign in | `POST /signin` `{username, password}` | `{ message, token, user: { username } }` |
| Add to cart | `POST /addtocart` `{productId, quantity}` | `{ message }` |
| Place order | `POST /placeorder` `{items, total}` | `{ message, orderId }` |

Errors should return a non-2xx status with `{ "message": "..." }`; that text is shown to the user.
The JWT is stored in `localStorage` (`cheap_token`) and sent as `Authorization: Bearer <token>`.

## Structure
```
src/
  api/         client.js (Axios + auth header), endpoints.js (calls), mock.js (fake server)
  components/  Header, Logo, Alert, AuthForm, ProductCard, ProtectedRoute, PageTransition
  context/     AuthContext (session), CartContext (cart state)
  hooks/       useRequest (loading + success/error alert)
  pages/       Home, SignUp, SignIn, Cart, Order
  data/        sample products
```

## Going live
Set `VITE_USE_MOCK=false` and `VITE_API_URL` to your server. Note: localStorage JWTs are
simple but exposed to XSS; consider httpOnly cookies for production.
