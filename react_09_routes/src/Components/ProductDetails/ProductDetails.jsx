import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProducts] = useState({});
  const { title, price, description, category, image, rating = {} } = product;
  const { rate, count } = rating;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProducts(data);
    })();
  }, []);

  return (
    <div className="product-details">
      <Link to="/products">
        <FontAwesomeIcon icon={faCircleLeft} className="left-arrow" />
      </Link>
      <h1>Product details</h1>
      <h2>{title}</h2>
      <img src={image} alt="image" />
      <p>Price: €{price}</p>
      <p>{description}</p>
      <p>{category}</p>
      <div className="card-footer">
        <p>{rate}</p>
        <p className="products-left">Only {count / 10} left!</p>
      </div>
    </div>
  );
}

export default ProductDetails;
