export type THomeRequest = {
  results: TCategoriesRequest[];
} & TInfoRequesr;

export type TInfoRequesr = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
};

export type TCategoriesRequest = {
  id: number;
  name: string;
  status: string;
  species: string;
  tupe: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
