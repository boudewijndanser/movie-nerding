

export type UserWatchlist = {
    movies: MovieThumb[]
    total: number
    pages: number
}

export type MovieThumb = {
    id: number
    title: string
    cover: string
}

///////////////////////////////////////////////////////////////////
// TMDB API response types below
//////////////////////////////////////////////////////////////////

export interface WatchlistResponse {
    page:          number;
    results:       MovieResult[];
    total_pages:   number;
    total_results: number;
}

export interface MovieResult {
    release_date:      string;
    adult:             boolean;
    backdrop_path:     null | string;
    genre_ids:         number[];
    vote_count:        number;
    original_language: OriginalLanguage;
    original_title:    string;
    poster_path:       null | string;
    vote_average:      number;
    video:             boolean;
    id:                number;
    title:             string;
    overview:          string;
    popularity:        number;
}

export enum OriginalLanguage {
    En = "en",
    Nl = "nl",
    Ru = "ru",
}
