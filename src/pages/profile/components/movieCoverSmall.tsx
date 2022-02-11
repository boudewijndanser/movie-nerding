import { NavLink } from 'react-router-dom'
import { thumbnailUrl } from '../../../application/hardcoded'
import { MovieThumb } from '../../user/userDataTypes'

export const MovieCoverSmall = (input: MovieThumb) => {

    let linkUrl: string = `/movie/${input.id}`
    
    return(
        <li className="movieCard" key={`${input.id}-${input.title}`}>
        <NavLink to={linkUrl}>
            <div>{
                input.userData?.rating &&
                <p className="userScore">{input.userData.rating}</p>
            }
            

            {
                input.movieData?.rating && 
                <p>{input.movieData.rating}</p>
            }
            <img 
                className="img"
                src= {`${thumbnailUrl}${input.cover}`} 
                alt= {input.title} 
            />
        </div>
        </NavLink>
        </li>
    )
}