import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Products from "./products";
import Cart from "./cart";
// import { Suspense } from "react";
// import { ClipLoader } from "react-spinners";
// import { ClipLoader } from "react-spinners";

// import { lazy } from "react";
// const Home = lazy(() => import("./home"));
// const Products = lazy(() => import("./products"));
// const Cart = lazy(() => import("./cart"));
import { fetchproducts } from "./productsslice";
import { useSelector, useDispatch } from "react-redux";
import { showproducts } from "./productsslice";
import { useNavigate } from "react-router-dom";
// import { Suspense, lazy } from "react";
import { useEffect } from "react";

function App() {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.allproducts);

  console.log("check updated state above me");
  console.log(data);
  console.log("check updated state above me");
  let [Loading, setLoading] = useState(true);
  function abc() {
    console.log("abc function called");
    dispatch(fetchproducts());
  }
  console.log(data);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <>
      {/* <ClipLoader />
      {Loading ? (
        // <div>Loading....</div>
        <ClipLoader color="#09f" size={50} />
      ) : ( */}
      <BrowserRouter>
        <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/products">Products</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/cart">Cart</Link>
        {/* <Link to="/cart">Cart2</Link>
        <Link to="/cart">Cart3</Link> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
