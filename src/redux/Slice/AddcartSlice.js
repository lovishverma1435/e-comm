import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Async thunk to add to cart (API + Redux)
export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",
  async ({ userid, productId, quantity }, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3000/api/cartpost", {
        userid,
        productId,
        quantity,
      });

      alert("Item added to cart!");
      return { productId, quantity };
    } catch (error) {
      console.error("Error adding to cart:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ✅ Redux slice
const cartSlice = createSlice({
  name: "addcart",
  initialState: {
    items: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCartAsync.fulfilled, (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.productId === productId);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    });
    builder.addCase(addToCartAsync.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default cartSlice.reducer;
