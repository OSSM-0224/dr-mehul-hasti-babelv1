import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { contactService } from "../services/contact.service.js";
import { ContactMessage } from "@/src/types/index.js";

interface ContactState {
  loading: boolean;
  error: string | null;
  submitSuccess: boolean;
}

const initialState: ContactState = {
  loading: false,
  error: null,
  submitSuccess: false,
};

export const submitContactMessage = createAsyncThunk(
  "contact/submitContactMessage",
  async (message: ContactMessage, { rejectWithValue }) => {
    try {
      return await contactService.submitMessage(message);
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to submit contact message");
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactSuccess: (state) => {
      state.submitSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.submitSuccess = false;
      })
      .addCase(submitContactMessage.fulfilled, (state) => {
        state.loading = false;
        state.submitSuccess = true;
      })
      .addCase(submitContactMessage.rejected, (state, action) => {
        state.loading = false;
        state.submitSuccess = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetContactSuccess } = contactSlice.actions;
export default contactSlice.reducer;
