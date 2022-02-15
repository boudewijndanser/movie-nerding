

export type UserMovieList = MovieThumb[]

export type MovieThumb = {
    id: number
    title: string
    cover: string
    movieData: MovieData
    userData: UserMovieData
}

export type UserMovieData = {
    favorite: boolean
    watchlist: boolean
    rating?: number
}

export type MovieData = {
    releaseDate: string
    genres: string[]
    rating?: number
}

export type MovieThumbMoreData = {
    id: number
    title: string
    cover: string
    userData: UserMovieData
    movieData: MovieData
}

///////////////////////////////////////////////////////////////////
// TMDB API response types below
//////////////////////////////////////////////////////////////////

export interface MovieResponse {
    page:          number
    results:       MovieResult[]
    total_pages:   number
    total_results: number
}

export interface MovieResult {
    release_date:      string
    adult:             boolean
    backdrop_path:     null | string
    genre_ids:         number[]
    vote_count:        number
    original_language: OriginalLanguage
    original_title:    string
    poster_path:       null | string
    vote_average:      number
    video:             boolean
    id:                number
    title:             string
    overview:          string
    popularity:        number
    rating?:           number
}

export enum OriginalLanguage {
    En = "en",
    Nl = "nl",
    Ru = "ru",
}
