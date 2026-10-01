import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PageTransition from "./components/PageTransition";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

export default function App() {
  return (
    <>
      <Header />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/order" element={<ProtectedRoute><Order /></ProtectedRoute>} />
          <Route path="*" element={<p>Page not found.</p>} />
        </Routes>
      </PageTransition>
    </>
  );
}
