import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { aboutService } from "../services/about.service.js";
import { Branch } from "@/src/types/index.js";

interface AboutState {
  branches: Branch[];
  loading: boolean;
  error: string | null;
}

const initialState: AboutState = {
  branches: [],
  loading: false,
  error: null,
};

export const fetchBranches = createAsyncThunk(
  "about/fetchBranches",
  async (_, { rejectWithValue }) => {
    try {
      return await aboutService.getBranches();
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to fetch branches");
    }
  }
);

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBranches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBranches.fulfilled, (state, action: PayloadAction<Branch[]>) => {
        state.loading = false;
        state.branches = action.payload;
      })
      .addCase(fetchBranches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default aboutSlice.reducer;
