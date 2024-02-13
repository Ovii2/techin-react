import { Link, Outlet } from "react-router-dom";

import "./ProductList.css";
import Product from "../Product/Product";

function ProductList({ products }) {
  return (
    <>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <nav>
        <Link to="categories">go to categories</Link>
        <Link to="materials">go to materials</Link>
      </nav>
      <Outlet />
      <div>
        <Link to="/">Back to home</Link>
      </div>
    </>
  );
}
export default ProductList;
