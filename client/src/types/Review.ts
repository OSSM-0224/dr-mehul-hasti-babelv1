export interface Review {
  id: number;
  patientName: string;
  title: string;
  quote: string;
  stars: number;
  treatmentType: string;
  beforeImg: string;
  afterImg: string;
}

export type Testimonial = Review;
