import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { blogService } from "../services/blog.service.js";
import { BlogPost } from "@/src/types/index.js";

interface BlogState {
  items: BlogPost[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      return await blogService.getBlogs();
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to fetch blogs");
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action: PayloadAction<BlogPost[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default blogSlice.reducer;
