
export type Publication = {
    kind: "movie",
    base: MovieBase
} | {
    kind: "series",
    base: SeriesBase
}

export type MovieBase = {
    title: string,
    tagline: string,
    releaseDate: string
    runtime: number
    description: string
    director?: Director
    genres?: Genres
    score: number
}

export type People = {
  cast: Actor[]
  crew: Crew[]
}

export type Actor = {
  id: number,
  name: string,
  character: string,
  image: string
}

export type Crew = {
  id: number,
  name: string,
  department: string,
  job: Job,
  image: string
}

export type Director = {
  name: string,
  id: number,
  job: Job []
}

export type SeriesBase = {
    title: string
}

export type Genres = Genre[]

export type Genre = {
    id: number,
    name: string
}

export interface Tmdb {
    adult: boolean
    backdrop_path: string
    belongs_to_collection?: null
    budget: number
    genres?: (GenresEntity)[] | null
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies?: (ProductionCompaniesEntity)[] | null
    production_countries?: (ProductionCountriesEntity)[] | null
    release_date: string
    revenue: number
    runtime: number
    spoken_languages?: (SpokenLanguagesEntity)[] | null
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    credits: Credits
  }
  export interface GenresEntity {
    id: number
    name: string
  }
  export interface ProductionCompaniesEntity {
    id: number
    logo_path?: string | null
    name: string
    origin_country: string
  }
  export interface ProductionCountriesEntity {
    iso_3166_1: string
    name: string
  }
  export interface SpokenLanguagesEntity {
    english_name: string
    iso_639_1: string
    name: string
  }
  export interface Credits {
    cast?: (CastEntity)[] | null
    crew?: (CrewEntity)[] | null
  }
  export interface CastEntity {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path?: string | null
    cast_id: number
    character: string
    credit_id: string
    order: number
  }
  export interface CrewEntity {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path?: string | null
    credit_id: string
    department: string
    job: Job
  }
  
  export type Job = 'Director'
  | 'Writer'
  | 'Producer'
  | 'Editor'
  | 'Executive Producer'
  | 'Director of Photography'
  | 'Art Direction'
  | 'Production Design'
  | 'Set Decoration'
  | 'Storyboard Artist'
  | 'Supervising Art Director'
  | 'Costume Design'
  | 'Hair Department Head'