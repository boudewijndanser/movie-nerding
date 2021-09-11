
export const MovieTitle = (title: string, tagline: string, year: string) => {

    return(
        <div>
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <div className='tagline'>
                <h2>{tagline}</h2>
            </div>
            <span className='releaseDate'>
                <h3>{year}</h3>
            </span>
        </div>
    )
}