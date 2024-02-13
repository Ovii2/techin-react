import { Link } from "react-router-dom";
import "./Product.css";

function Product({ product }) {
  const { id, title, price } = product;
  return (
    <div className="product-card">
      <h2 className="product-title">{title}</h2>
      <p>€{price}</p>
      <Link to={`/product-details/${id}`}>
        <button className="product-button">Show more</button>
      </Link>
    </div>
  );
}

export default Product;
