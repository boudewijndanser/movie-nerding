import { MovieResult, MovieThumb, UserMovieList, MovieResponse } from './userDataTypes';

// Add genres
export const parseMovielistItem = (input: MovieResult ): MovieThumb => ({
    id: input.id,
    title: input.title,
    cover: input.poster_path !== null ? input.poster_path : '',
    rating: input.rating ? input.rating : undefined
})

export const parseMovielistRepsonse = (input: MovieResponse ): UserMovieList => { 
    console.log('--> parseMovieResponse: ', input)
    return input.results !== undefined ? input.results.map(parseMovielistItem) : [] 

}
