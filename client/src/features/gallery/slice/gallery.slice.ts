import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { galleryService } from "../services/gallery.service.js";
import { GalleryItem } from "../api/gallery.api.js";

interface GalleryState {
  items: GalleryItem[];
  loading: boolean;
  error: string | null;
}

const initialState: GalleryState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchGallery = createAsyncThunk(
  "gallery/fetchGallery",
  async (_, { rejectWithValue }) => {
    try {
      return await galleryService.getGallery();
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to fetch gallery");
    }
  }
);

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGallery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGallery.fulfilled, (state, action: PayloadAction<GalleryItem[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchGallery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default gallerySlice.reducer;
