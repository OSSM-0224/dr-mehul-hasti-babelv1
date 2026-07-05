import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { treatmentService } from "../services/treatment.service.js";
import { Treatment } from "@/src/types/index.js";

interface TreatmentState {
  items: Treatment[];
  loading: boolean;
  error: string | null;
}

const initialState: TreatmentState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchTreatments = createAsyncThunk(
  "treatments/fetchTreatments",
  async (_, { rejectWithValue }) => {
    try {
      return await treatmentService.getTreatments();
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to fetch treatments");
    }
  }
);

const treatmentSlice = createSlice({
  name: "treatments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTreatments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTreatments.fulfilled, (state, action: PayloadAction<Treatment[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTreatments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default treatmentSlice.reducer;
