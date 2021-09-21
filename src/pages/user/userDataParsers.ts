import { MovieResult, MovieThumb, UserWatchlist, WatchlistResponse } from './userDataTypes';


export const parseWatchlistItem = (input: MovieResult ): MovieThumb => ({
    id: input.id,
    title: input.title,
    cover: input.poster_path !== null ? input.poster_path : ''
})

export const parseWatchlistRepsonse = (input: WatchlistResponse ): UserWatchlist => ({
    movies: input.results.map(parseWatchlistItem),
    total: input.total_results,
    pages: input.total_pages
})