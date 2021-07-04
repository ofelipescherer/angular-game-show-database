export interface Game {
  background_image: string,
  name: string,
  relased: string,
  metacritic_url: string,
  website: string,
  description: string,
  metacritic: number,
  genres: Array<Genre>,
  parent_platforms: Array<ParentPlatform>,
  publishers: Array<Publishers>,
  ratings: Array<Rating>,
  screenshoots: Array<Screenshoots>,
  trailers: Array<Trailer>;
}

export interface APIResponse<T> {
  results: Array<T>,
}

interface Genre {
  name: string,

}

interface ParentPlatform {
  platform: {
    name: string,
  },
}

interface Publishers {
  name: string
}

interface Rating {
  id: number,
  count: number,
  title: string,
}

interface Screenshoots {
  image: string,
}

interface Trailer {
  data: {
    max: string,
  }
}