export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  readTime: string;
}

export interface StatItem {
  id: number;
  number: string;
  label: string;
  iconName: string;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  id: number;
  number: string;
  title: string;
  description: string;
  iconName: string;
}
