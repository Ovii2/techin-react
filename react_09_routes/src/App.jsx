import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Pages/Home/Home";
import Pricing from "./Components/Pages/Pricing/Pricing";
import ProductList from "./Components/ProductList/ProductList";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import PageNotFound from "./Components/Pages/PageNotFound/PageNotFound";
import Materials from "./Components/Materials/Materials";
import Categories from "./Components/Categories/Categories";
import axios from "axios";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get("https://fakestoreapi.com/products");
  //     setProducts(data);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    })();
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="products" element={<ProductList products={products} />}>
          <Route path="materials" element={<Materials />} />
          <Route path="categories" element={<Categories />} />
        </Route>
        <Route path="product-details/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
