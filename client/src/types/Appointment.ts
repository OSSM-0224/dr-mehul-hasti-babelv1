export interface Appointment {
  id?: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  treatmentId: number;
  notes?: string;
  createdAt?: string;
}
