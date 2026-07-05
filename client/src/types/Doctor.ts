export interface TeamMember {
  id: number;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  education: string[];
  imageUrl: string;
}

export type Doctor = TeamMember;
