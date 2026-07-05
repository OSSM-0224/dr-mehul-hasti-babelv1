import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { faqService } from "../services/faq.service.js";
import { FAQItem } from "../api/faq.api.js";

interface FAQState {
  items: FAQItem[];
  loading: boolean;
  error: string | null;
}

const initialState: FAQState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchFaqs = createAsyncThunk(
  "faq/fetchFaqs",
  async (_, { rejectWithValue }) => {
    try {
      return await faqService.getFaqs();
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to fetch faqs");
    }
  }
);

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFaqs.fulfilled, (state, action: PayloadAction<FAQItem[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default faqSlice.reducer;
