import { createSlice } from "@reduxjs/toolkit";

let mycart = [];
let cartslice = createSlice({
  name: "shopping_cart",
  initialState: mycart,
  reducers: {
    addtocart: (state, action) => {
      console.log(action);
      console.log("check action above me");
      let isitemalready = state.some((item) => item.id === action.payload.id);
      console.log("add to cart function is working properly", isitemalready);
      if (isitemalready) {
        let itemindex = state.findIndex(
          (item) => item.id === action.payload.id
        );
        state[itemindex].totalQ += 1;
      } else {
        state.push({ ...action.payload, totalQ: 1, xyz: 7 });
      }
      console.log(state);
      console.log("mkmkmkm");
    },
    removefromcart: (state, action) => {
      console.log(action);
      console.log("bhbhbhbhbhbhbhbhbhbhb");

      let itemexist = state.some((item) => item.id === action.payload.id);
      if (itemexist) {
        let indexofitem = state.findIndex(
          (item) => item.id === action.payload.id
        );
        if (state[indexofitem].totalQ > 1) {
          state[indexofitem].totalQ -= 1;
        } else {
          state.splice(indexofitem, 1);
        }
      } else {
        alert("Item is not in your cart");
      }
    },
  },
});
export default cartslice.reducer;
export let { addtocart, removefromcart } = cartslice.actions;
