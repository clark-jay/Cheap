import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Alert from "../components/Alert";
import useRequest from "../hooks/useRequest";
import { addToCart } from "../api/endpoints";
import { products } from "../data/products";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { user } = useAuth();
  const { addItem } = useCart();
  const { loading, alert, run } = useRequest();
  const navigate = useNavigate();

  const handleAdd = async (product) => {
    if (!user) return navigate("/signin"); // must be signed in to shop
    const res = await run(() => addToCart(product.id, 1), "Added to cart.");
    if (res) addItem(product); // only update the local cart if the server accepted it
  };

  return (
    <>
      <section className="hero">
        <h1>Everything in the selection is in Retail price</h1>
        <p className="muted">Everyday basics, shorn of the markup.</p>
      </section>
      <Alert alert={alert} />
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={handleAdd} disabled={loading} />
        ))}
      </div>
    </>
  );
}
