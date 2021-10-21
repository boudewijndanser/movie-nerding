import { genreObjects } from '../../application/hardcoded';
import { UserMovieList } from '../user/userDataTypes';
import { GenreObject } from './movieTypes';

export const outputHoursAndMinutes = (input:number):string => {

    let hours = Math.floor(input / 60);
    let minutes = Math.floor(input % 60);
    // eslint-disable-next-line
    let output:string = hours.toString() +'h' +' ' + minutes.toString() +'m'
    return output
}

export const genreGetTitleFromId = (ids: number[], genres: GenreObject[] ): string[] => {

    let output: string[] = []

    ids.map(id => {
        let object = genres.find(object => object.id === id)

        return(
        object !== undefined 
           ? output.push(object.name)
           : null
        )
    })

    return output
}

export const extractGenreIds = (input: UserMovieList ):number[] => {
    let output:number[] = []

    input.map(movie => {
        movie.movieData !== undefined
        ? movie.movieData.genres.map(genre => {
            output.push(genre)
            }
        )
        : console.log('empty')
    })

    return output
}

export const returnGenresAndCounts = (input: UserMovieList) => {
    // Store all ids in an array
    let arrayOfIds: number[] = extractGenreIds(input)

    // Count them and return an array 
    const counted = arrayOfIds.reduce((acc:any, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {})
    
    // Create objects
    let obj = Object.keys(counted).map(key => {
        let output = {
            id: +key,
            count: counted[key],
            title: genreGetTitleFromId([+key], genreObjects)[0]
        }
        return output
    }).sort((a,b) => b.count - a.count)

    console.log('obj ', obj)

}