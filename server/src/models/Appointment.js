import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, trim: true },
  phone: { type: String, trim: true },
  date: { type: String, trim: true },
  time: { type: String, trim: true },
  clinic: { type: String, trim: true },
  notes: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
