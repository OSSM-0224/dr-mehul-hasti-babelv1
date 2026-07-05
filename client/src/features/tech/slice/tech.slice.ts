import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { techService } from "../services/tech.service.js";
import { TechItem } from "../api/tech.api.js";

interface TechState {
  items: TechItem[];
  loading: boolean;
  error: string | null;
}

const initialState: TechState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchTechData = createAsyncThunk(
  "tech/fetchTechData",
  async (_, { rejectWithValue }) => {
    try {
      return await techService.getTechData();
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to fetch technology data");
    }
  }
);

const techSlice = createSlice({
  name: "tech",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTechData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTechData.fulfilled, (state, action: PayloadAction<TechItem[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTechData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default techSlice.reducer;
