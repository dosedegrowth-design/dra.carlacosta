export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  image: string;
}

export interface Pilar {
  icon: string;
  title: string;
  description: string;
}

export interface Mito {
  mito: string;
  verdade: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}
