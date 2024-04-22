
export type Speaker = {
  name: string;
  bio: string;
  role: string;
  image: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  inspiringPhrase?: string;
};

export type Talk = {
  title: string;
  description?: string;
  speaker: Speaker;
  time: string;
};