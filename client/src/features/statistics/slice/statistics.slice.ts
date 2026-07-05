import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { statisticsService } from "../services/statistics.service.js";
import { StatItem } from "@/src/types/index.js";

interface StatisticsState {
  items: StatItem[];
  loading: boolean;
  error: string | null;
}

const initialState: StatisticsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchStatistics = createAsyncThunk(
  "statistics/fetchStatistics",
  async (_, { rejectWithValue }) => {
    try {
      return await statisticsService.getStatistics();
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to fetch statistics");
    }
  }
);

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatistics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStatistics.fulfilled, (state, action: PayloadAction<StatItem[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default statisticsSlice.reducer;
