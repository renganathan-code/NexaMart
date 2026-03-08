import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_LOCAL_URL;


// CREATE PRODUCT API
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async ({ productImage, formData }, { rejectWithValue }) => {
    try {

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("image", productImage);

      
      const response = await axios.post(
        `${BASE_URL}/api/product/create`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

      return response.data;

    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);


const productSlice = createSlice({
  name: "product",

  initialState: {
    loading: false,
    error: null,
    success: false
  },

  reducers: {},

  extraReducers: (builder) => {

    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
    });

    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

  }
});

export default productSlice.reducer;