import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import useRequest from "../hooks/useRequest";
import { placeOrder } from "../api/endpoints";
import { useCart } from "../context/CartContext";

export default function Order() {
  const { items, total, clear } = useCart();
  const { loading, alert, run } = useRequest();

  const handlePlaceOrder = async () => {
    const res = await run(() => placeOrder(items, total), "Order placed!");
    if (res) clear(); // empty the cart once the server confirms
  };

  // Keep the success message visible after the cart is cleared.
  if (items.length === 0)
    return (
      <div className="card center">
        <Alert alert={alert} />
        <h2>{alert?.type === "success" ? "Thanks for your order" : "Nothing to order yet"}</h2>
        <Link to="/" className="btn">Back to shop</Link>
      </div>
    );

  return (
    <div className="card">
      <h2>Review and place order</h2>
      <Alert alert={alert} />
      {items.map((i) => (
        <div className="row" key={i.id}>
          <span>{i.name} × {i.qty}</span><span>${(i.price * i.qty).toFixed(2)}</span>
        </div>
      ))}
      <div className="row total"><span>Total</span><span>${total.toFixed(2)}</span></div>
      <button className="btn" onClick={handlePlaceOrder} disabled={loading}>
        {loading ? "Placing order…" : "Place order"}
      </button>
    </div>
  );
}
