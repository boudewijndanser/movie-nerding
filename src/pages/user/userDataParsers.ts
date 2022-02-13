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

export const addFavouriteToRating = (favourite: UserMovieList,watchlist: UserMovieList, rating: UserMovieList, ) => {

    let collected: MovieThumb [] = []


    rating.map((rated: MovieThumb) => {

        let combined: MovieThumb = {
            id: rated.id,
            title: rated.title,
            cover: rated.cover,
            movieData: {
                releaseDate: rated.movieData?.releaseDate,
                genres: rated.movieData?.genres,
                rating: rated.movieData?.rating
            },
            userData: {
                favorite: favourite.find(movie => movie.id === rated.id) != undefined ? true : false,
                watchlist: false,
                rating: rated.userData.rating
            }
        }

     
    return collected.push(combined)
        
    })
    console.log('Collected: ', collected)
}
