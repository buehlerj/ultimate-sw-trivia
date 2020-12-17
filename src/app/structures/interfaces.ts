import { MovieCode } from "./enums";

export interface Movie {
  code: MovieCode,
  title: string;
  poster: string;
  script?: string;
};

export interface Line {
  character: string;
  line: string;
};