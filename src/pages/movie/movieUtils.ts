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
export const testArray = [
    28,
    9648,
    878
  ]


