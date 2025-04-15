import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// let is = [];
let is = { myproducts: [], state: "" };
// let productslice = createSlice({
//   name: "products",
//   initialState: is,
//   reducers: {
//     showproducts: (state, action) => {
//       console.log(action);
//       console.log(action.payload);
//       console.log("check action.payload above me");
//       // return action.payload;
//       state.myproducts = action.payload;
//     },
//   },
// });

// console.log(productslice.actions);
// console.log("Hello.........");
let productslice = createSlice({
  name: "products",
  initialState: is,
  // reducers: {
  //   showproducts: (state, action) => {
  //     console.log(action);
  //     console.log(action.payload);
  //     console.log("check action.payload above me");
  //     return action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    // builder.addCase(fetchproducts.pending, (state, action) => {
    //   state.push;
    // });
    builder.addCase(fetchproducts.fulfilled, (state, action) => {
      console.log(action);
      console.log("555555555555");
      state.myproducts = action.payload;
      state.state = "fullfilled";
    });
    builder.addCase(fetchproducts.pending, (state, action) => {
      state.state = "pending";
    });
    builder.addCase(fetchproducts.rejected, (state, action) => {
      state.state = "rejected";
    });
  },
});
// export let fetchproducts = () => {
//   return async (dispatch, getstate) => {
//     let data = await fetch("https://fakestoreapi.com/products");
//     let mydata = await data.json();
//     console.log("check mydata above");
//     console.log(mydata);
//     console.log("check mydata above");
//     dispatch(showproducts(mydata));
//   };
// };
export let fetchproducts = createAsyncThunk("fetchproducts", async () => {
  // return async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  // let mydata = await data.json();
  // console.log("check mydata above");
  // console.log(mydata);
  let data = await response.json();
  return data;
  // console.log("check mydata above");
  // dispatch(showproducts(mydata));
  // };
});
export default productslice.reducer;
export let { showproducts } = productslice.actions;
