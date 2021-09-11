import { MovieBase, People } from './movieTypes'
import { MovieTitle } from './components/movieTitle'
import { MovieCover } from './components/movieCover'
import { DirectorCompoment } from './components/directorComponent';
import { backgroundPosterUrl } from '../../application/hardcoded';
import { CastMember } from './components/castMember';
import { GenreLabel } from './components/genreLabel';


export const MoviePresentation = (movieBase: MovieBase, people: People ): JSX.Element => {
    
    return(
        <>
        <div className='singleColumn'>
        <div className='contentInner'>
            <img 
                className='backgroundImg'
                src={`${backgroundPosterUrl}${movieBase.backdrop}`}
                alt={movieBase.title}
            />
            <div className='primaryContent'>
                
                {
                    MovieCover(movieBase.cover, movieBase.title)
                }
                
                    <div className='contentRightWrapper'>
                        <div className='contentRight'>
                    {
                        MovieTitle(movieBase.title, movieBase.tagline, movieBase.releaseDate.substring(0,4))
                    }
                        <div className="overviewInfo">
                            <p>{movieBase.description}</p>
                        </div>

                        <div className='director'>
                            { movieBase.director &&
                                DirectorCompoment(movieBase.director)
                            }
                        </div>

                        </div>
                    </div>
            </div>
        </div>
        </div>
        <div className='genreContainer'>{movieBase.genres && movieBase.genres.map(GenreLabel)}</div>
        <div className="castAndFacts">
                <div className="movieCastWrapper">
                <div className='movieCast'>{people?.cast.slice(0,9).map(CastMember)}</div>
                </div>
                </div>
        </>
    )
}

// eslint-disable-next-line
{/* <>


<p>{outputHoursAndMinutes(movieBase.runtime)}</p>

</> */}