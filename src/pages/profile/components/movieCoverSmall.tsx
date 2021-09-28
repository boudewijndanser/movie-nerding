import { NavLink } from 'react-router-dom'
import { thumbnailUrl } from '../../../application/hardcoded'
import { MovieThumb } from '../../user/userDataTypes'

export const MovieCoverSmall = (input: MovieThumb) => {
    let linkUrl: string = `/movie/${input.id}`
    return(
        <NavLink to={linkUrl}>
        <figure className="movieCard" key={input.id}>
            <img className="img"src= {`${thumbnailUrl}${input.cover}`} alt= {input.title} />
        </figure>
        </NavLink>
    )
}