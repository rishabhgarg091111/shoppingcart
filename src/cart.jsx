import { useSelector, useDispatch } from "react-redux";
import classes from "./products.module.css";
import { removefromcart, addtocart } from "./cartslice";
import classess from "./cart.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Cart() {
  console.log("I am cart module");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let dataa = useSelector((state) => state.cart);
  let totalcartItems = 0;
  console.log(dataa);
  // console.log(state);
  console.log("dataa   ");
  console.log("check all cart item above me");
  for (let item of dataa) {
    totalcartItems = totalcartItems + item.totalQ;
  }

  function xyz() {
    navigate("/products");
  }
  return (
    <>
      <div>
        {/* <Link to="/products">dsfkjsdf</Link> */}
        <div onClick={() => xyz()} className={classess.addmoreitem}>
          <b>Add Item </b>
        </div>
      </div>
      {totalcartItems >= 1 ? (
        <div className={classess.totalItemmsg}>
          Total Items in your cart:
          <span className={classess.itemnumbers}>{totalcartItems}</span>
        </div>
      ) : (
        <div>Your cart is empty, add some items</div>
      )}
      {dataa.map((item) => (
        <div key={item.id}>
          <div className={classes.imagebox}>
            <img src={item.image} alt="item's image" width={200} height={200} />
            <div>{item.title}</div>
            <div style={{ margin: "8px" }}>
              <span className={classes.rating_avg}>{item.rating.rate}*</span>
              <span style={{ marginLeft: "10px" }}>({item.rating.count})</span>
            </div>
            <div className={classes.price}>&#x20B9;{item.price}</div>
            <div>
              <span
                className={classess.decitemquant}
                onClick={() => dispatch(removefromcart(item))}
              >
                -
              </span>
              <span className={classess.quantity}>{item.totalQ}</span>
              <span
                className={classess.decitemquant}
                onClick={() => dispatch(addtocart(item))}
              >
                +
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Cart;
