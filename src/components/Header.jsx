import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { user, logout } = useAuth();
  const { count } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <Link to="/" aria-label="CHEAP home"><Logo /></Link>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart{count > 0 && <span className="badge">{count}</span>}</NavLink>
        <NavLink to="/order">Order</NavLink>
        {user ? (
          <>
            <span className="muted">Hi, {user.username}</span>
            <button className="btn btn-outline" onClick={handleLogout}>Sign out</button>
          </>
        ) : (
          <>
            <NavLink to="/signin">Sign in</NavLink>
            <Link to="/signup" className="btn">Create account</Link>
          </>
        )}
      </nav>
    </header>
  );
}
