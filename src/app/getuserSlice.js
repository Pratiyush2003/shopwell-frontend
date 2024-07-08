import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "fetchproducts",
  async (args, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=100&skip=10&select=title,price,category,description,id,images,brand,rating"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



export const addToCart = createAsyncThunk(
  "addToCart",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://shopwell-backend.onrender.com/api/products/addproduct",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const cartproduct = createAsyncThunk(
  "cartproduct",
  async (args, { rejectWithValue }) => {
    try {
      const response = await fetch("https://shopwell-backend.onrender.com/api/products/fetchallproducts", {
        method: "GET",
        headers: {
          'content-type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteproduct = createAsyncThunk(
  "deleteproduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://shopwell-backend.onrender.com/api/products/deleteproduct/${id}`, {
        method: "DELETE",
        headers: {
          'content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const result = await response.json();
      return { id: result.id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const allAppQuery = createSlice({
  name: "allAppQuery",
  initialState: {
    allshoppingProducts: [],
    loading: false,
    error: null,
    searchData: [],
    cart: [],
    allCartProduct : []
  },
  reducers: {
    searchproduct: (state, action) => {
      state.searchData = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allshoppingProducts = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(cartproduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(cartproduct.fulfilled, (state, action) => {
        state.loading = false;
        state.allCartProduct = action.payload;
      })
      .addCase(cartproduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart.push(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteproduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteproduct.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = state.allCartProduct.filter((ele) => ele._id !== action.payload);
      })
      .addCase(deleteproduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default allAppQuery.reducer;
export const { searchproduct } = allAppQuery.actions;
