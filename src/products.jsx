import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchproducts } from "./productsslice";
import classes from "./products.module.css";
import { addtocart } from "./cartslice";
import { removefromcart } from "./cartslice";

function Products() {
  let data = useSelector((state) => state.allproducts);
  console.log(data);
  console.log("mnmnmnmnmnmnm");
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchproducts());
  }, []);

  // console.log(data.)
  // console.log("99999999999");

  return (
    <>
      {data.state == "pending" ? (
        <div>Please wait while we fetch data from api</div>
      ) : data.state == "rejected" ? (
        <div>coyld not fetch data </div>
      ) : (
        // <div>hello...</div>

        // }
        // {
        data.myproducts.map((item) => (
          <div key={item.id}>
            <div className={classes.imagebox}>
              <img
                src={item.image}
                alt="item's image"
                width={200}
                height={200}
              />
              <div>{item.title}</div>
              <div style={{ margin: "8px" }}>
                <span className={classes.rating_avg}>{item.rating.rate}*</span>
                <span style={{ marginLeft: "10px" }}>
                  ({item.rating.count})
                </span>
              </div>
              <div className={classes.price}>&#x20B9;{item.price}</div>
              <input
                type="button"
                value="Add to Cart"
                className={classes.cartbtn}
                onClick={() => dispatch(addtocart(item))}
              />
            </div>
          </div>
        ))
      )}
      {/* </Suspense> */}
    </>
  );
}

export default Products;
