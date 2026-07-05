import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { testimonialService } from "../services/testimonial.service.js";
import { Testimonial } from "@/src/types/index.js";

interface TestimonialState {
  items: Testimonial[];
  loading: boolean;
  error: string | null;
}

const initialState: TestimonialState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetchTestimonials",
  async (_, { rejectWithValue }) => {
    try {
      return await testimonialService.getTestimonials();
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to fetch testimonials");
    }
  }
);

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action: PayloadAction<Testimonial[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default testimonialSlice.reducer;
