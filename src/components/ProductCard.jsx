export default function ProductCard({ product, onAdd, disabled }) {
  return (
    <div className="card product">
      <div className="product-emoji" aria-hidden="true">{product.emoji}</div>
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <button className="btn" onClick={() => onAdd(product)} disabled={disabled}>Add to cart</button>
    </div>
  );
}
