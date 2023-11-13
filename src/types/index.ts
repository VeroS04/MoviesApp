export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: Date;
  token?: string | null;
};

export type SignUpForm = Omit<User, "id" | "birthdate"> & { birthdate: Date };
export type SignUpPayload = SignUpForm;


export type LoginForm = {
  email: string;
  pass: string;
};

export type Movie = {
  title : string
  id: number
  overview: string
  backdrop_path: string
  poster_path: string
}

export type Search = {
  title : string
  page? : string
}

export type MovieDetail = {
  title : string
  id: number
  overview: string
  backdrop_path: string | null
  poster_path: string
  release_date: string
  vote_average: number
  production_companies : gender[]
  genres : gender[]
  production_countries : Partial<gender>[]
};

type gender = {
  id: number,
  name: string
}

export type video = {
  id: string 
  iso_639_1 : string
  iso_3166_1 : string
  key: string
  name : string
  site: string
  size : number
  type : string
}