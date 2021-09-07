
export const outputHoursAndMinutes = (input:number):string => {

    let hours = Math.floor(input / 60);
    let minutes = Math.floor(input % 60);
    // eslint-disable-next-line
    let output:string = hours.toString() +'h' +' ' + minutes.toString() +'m'
    return output
}