export type Treatment = {
  name: string;
  handle: string;
  price?: number;
  description?: string;
  _id: string
};

export type Categories = {
  name: string;
  handle: string;
  treatments: Treatment[];
  _id: string;
};
