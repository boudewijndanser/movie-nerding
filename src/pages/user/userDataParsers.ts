import { genreObjects } from '../../application/hardcoded';
import { genreGetTitleFromId } from '../movie/movieUtils';
import { MovieResult, MovieThumb, UserMovieList, MovieResponse } from './userDataTypes';

export const parseMovielistItem = (input: MovieResult ): MovieThumb => ({
    id: input.id,
    title: input.title,
    cover: input.poster_path !== null ? input.poster_path : '',
    movieData: {
        releaseDate: input.release_date,
        genres: genreGetTitleFromId(input.genre_ids, genreObjects),
        rating: input.vote_average ? input.vote_average : undefined
    },
    userData: {
        favorite: false,
        watchlist: false,
        rating: input.rating ? input.rating : undefined
    }
})

export const parseMovielistRepsonse = (input: MovieResponse ): UserMovieList => { 

    return input.results !== undefined ? input.results.map(parseMovielistItem) : [] 
}
