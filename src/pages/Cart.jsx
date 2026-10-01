import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, removeItem, total } = useCart();

  if (items.length === 0)
    return (
      <div className="card center">
        <h2>Your cart is empty</h2>
        <p className="muted">Add something from the shop to get started.</p>
        <Link to="/" className="btn">Browse products</Link>
      </div>
    );

  return (
    <div className="card">
      <h2>Your cart</h2>
      {items.map((i) => (
        <div className="row" key={i.id}>
          <span>{i.emoji} {i.name} × {i.qty}</span>
          <span>
            ${(i.price * i.qty).toFixed(2)}{" "}
            <button className="link" onClick={() => removeItem(i.id)}>Remove</button>
          </span>
        </div>
      ))}
      <div className="row total"><span>Total</span><span>${total.toFixed(2)}</span></div>
      <Link to="/order" className="btn">Continue to order</Link>
    </div>
  );
}
