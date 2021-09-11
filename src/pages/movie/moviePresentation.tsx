import { MovieBase, People } from './movieTypes'
import { MovieTitle } from './components/movieTitle'
import { MovieCover } from './components/movieCover'


export const MoviePresentation = (movieBase: MovieBase, people: People ): JSX.Element => {
    
    return(
        <div>
            
            {
                MovieTitle(movieBase.title, movieBase.tagline, movieBase.releaseDate.substring(0,4))
            }
            {
                MovieCover(movieBase.cover, movieBase.title)
            }
            <p>{movieBase.score}</p>
            <p>{movieBase.description}</p>


        </div>
    )
}

// eslint-disable-next-line
{/* <>
<h1>{movieBase.title}</h1>
<h2>{movieBase.tagline}</h2>
<p>{movieBase.score}</p>
<p>{movieBase.releaseDate}</p>
<div className='genreContainer'>{movieBase.genres && movieBase.genres.map(GenreLabel)}</div>
<p>{outputHoursAndMinutes(movieBase.runtime)}</p>
<p>{movieBase.description}</p>
<>{movieBase.director && DirectorCompoment(movieBase.director)}</>
<div className='movieCast'>{people?.cast.slice(0,5).map(CastMemberComponent)}</div>
</> */}