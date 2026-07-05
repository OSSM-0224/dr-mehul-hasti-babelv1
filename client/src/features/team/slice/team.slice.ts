import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { teamService } from "../services/team.service.js";
import { TeamMember } from "@/src/types/index.js";

interface TeamState {
  items: TeamMember[];
  loading: boolean;
  error: string | null;
}

const initialState: TeamState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchTeam = createAsyncThunk(
  "team/fetchTeam",
  async (_, { rejectWithValue }) => {
    try {
      return await teamService.getTeam();
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to fetch team");
    }
  }
);

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeam.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeam.fulfilled, (state, action: PayloadAction<TeamMember[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTeam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default teamSlice.reducer;
