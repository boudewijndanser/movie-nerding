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

    return input.results !== undefined 
        ? input.results.map(parseMovielistItem) 
        : [] 
}

export const combineUserData = (favourite: UserMovieList,watchlist: UserMovieList, rated: UserMovieList, ) => {

    let collected: MovieThumb [] = []

    //Combine the 3 lists
    let allMovies: MovieThumb [] = favourite.concat(rated, watchlist)

    allMovies.map((movie: MovieThumb) => {

        let ratingFound: number | undefined = undefined

        ratingFound = rated.find(( rate ) => rate.id === movie.id)?.userData.rating

        let combined: MovieThumb = {
            id: movie.id,
            title: movie.title,
            cover: movie.cover,
            movieData: {
                releaseDate: movie.movieData?.releaseDate,
                genres: movie.movieData?.genres,
                rating: movie.movieData?.rating
            },
            userData: {
                // Create a complete userData object based on values from the 3 arrays
                favorite: favourite.find(fav => fav.id === movie.id) !== undefined ? true : false,
                watchlist: watchlist.find(watch => watch.id === movie.id) !== undefined ? true : false,
                rating: ratingFound
            }
        }

    collected.push(combined)
    })


    let seen = new Set()

    let filtered = collected.filter(movie => {
        
        let isDuplicate: boolean = seen.has(movie.id)
        seen.add(movie.id)

        return !isDuplicate
    })
    console.log('==> filtered.length: ', filtered.length)
    // console.log('Collected: ',collected)
    // console.log('Filtered: ', filtered)

    return filtered

}
