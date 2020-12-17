export interface Movie {
  code: MovieCode,
  title: string;
  poster: string;
  script?: string;
};

export enum MovieCode {
  phantom = 'phantom',
  attack = 'attack',
  revenge = 'revenge',
  hope = 'hope',
  empire = 'empire',
  return = 'return',
  awakens = 'awakens',
  last = 'last',
  skywalker = 'skywalker',
  rogue = 'rogue',
  solo = 'solo'
};