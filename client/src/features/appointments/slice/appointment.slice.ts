import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { appointmentService } from "../services/appointment.service.js";
import { Appointment } from "@/src/types/index.js";

interface AppointmentState {
  items: Appointment[];
  loading: boolean;
  error: string | null;
  submitSuccess: boolean;
}

const initialState: AppointmentState = {
  items: [],
  loading: false,
  error: null,
  submitSuccess: false,
};

export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAppointments",
  async (_, { rejectWithValue }) => {
    try {
      return await appointmentService.getAppointments();
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to fetch appointments");
    }
  }
);

export const createAppointment = createAsyncThunk(
  "appointments/createAppointment",
  async (appointment: Appointment, { rejectWithValue }) => {
    try {
      const data = await appointmentService.createAppointment(appointment);
      return data.appointment;
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to create appointment");
    }
  }
);

export const deleteAppointment = createAsyncThunk(
  "appointments/deleteAppointment",
  async (id: string, { rejectWithValue }) => {
    try {
      await appointmentService.deleteAppointment(id);
      return id;
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to delete appointment");
    }
  }
);

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    resetSubmitSuccess: (state) => {
      state.submitSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAppointments.fulfilled, (state, action: PayloadAction<Appointment[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Create
      .addCase(createAppointment.pending, (state) => {
        state.loading = true;
        state.submitSuccess = false;
        state.error = null;
      })
      .addCase(createAppointment.fulfilled, (state, action: PayloadAction<Appointment>) => {
        state.loading = false;
        state.submitSuccess = true;
        state.items.push(action.payload);
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.loading = false;
        state.submitSuccess = false;
        state.error = action.payload as string;
      })
      // Delete
      .addCase(deleteAppointment.fulfilled, (state, action: PayloadAction<string>) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export const { resetSubmitSuccess } = appointmentSlice.actions;
export default appointmentSlice.reducer;
