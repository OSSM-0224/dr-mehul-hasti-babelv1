import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "../../features/appointments/slice/appointment.slice.js";
import contactReducer from "../../features/contact/slice/contact.slice.js";
import treatmentReducer from "../../features/treatments/slice/treatment.slice.js";
import teamReducer from "../../features/team/slice/team.slice.js";
import galleryReducer from "../../features/gallery/slice/gallery.slice.js";
import faqReducer from "../../features/faq/slice/faq.slice.js";
import testimonialReducer from "../../features/testimonials/slice/testimonial.slice.js";
import statisticsReducer from "../../features/statistics/slice/statistics.slice.js";
import blogReducer from "../../features/blog/slice/blog.slice.js";
import techReducer from "../../features/tech/slice/tech.slice.js";
import aboutReducer from "../../features/about/slice/about.slice.js";

export const store = configureStore({
  reducer: {
    appointments: appointmentReducer,
    contact: contactReducer,
    treatments: treatmentReducer,
    team: teamReducer,
    gallery: galleryReducer,
    faq: faqReducer,
    testimonials: testimonialReducer,
    statistics: statisticsReducer,
    blog: blogReducer,
    tech: techReducer,
    about: aboutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
