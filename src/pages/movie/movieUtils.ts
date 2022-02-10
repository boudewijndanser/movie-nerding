import { genreObjects } from '../../application/hardcoded';
import { UserMovieList } from '../user/userDataTypes';
import { GenreObject, sideBarFilterItem } from './movieTypes';

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

export const extractGenreIds = (input: UserMovieList ):string[] => {
    let output:string[] = []

    input.map(movie => { 
        return movie.movieData !== undefined
        ? movie.movieData.genres.map(genre => {
            output.push(genre)
            }
        )
        : console.log('empty')
    })

    return output
}

export const genreIdFromTitle = (title: string, genres: GenreObject[] ): number => {

    let output: number = 0

    genres.map(genre => {
        return genre.name === title 
        ? output = genre.id
        : ''
    })

    return output
}

export const returnGenresAndCounts = (input: UserMovieList): sideBarFilterItem[] => {

    // Store all ids in an array
    let arrayOfIds: string[] = extractGenreIds(input)

    // Count them and return an array 
    const counted = arrayOfIds.reduce((acc:any, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {})
    
    //Use this in the left sidebar!
    console.log('--> counted: ', counted)

    // Create objects
    let obj = Object.keys(counted).map(key => {
        let output = {
            id: genreIdFromTitle(key, genreObjects),
            count: counted[key],
            title: key
        }
        return output
    }).sort((a,b) => b.count - a.count)

    console.log('obj ', obj)

    return obj
}


    // const isMovieInList = (movies: UserMovieList):boolean => {
    //     const pathArray = window.location.pathname.split('/');
    //     const id = pathArray[2];
    //     let output = movies.filter(movie => movie.id === parseInt(id))
    //     console.log('----> paramId: ', id)
    //     // console.log('-> isMovieInList: ', output)
    //     return output.length > 0
    // }