import { thumbnailUrl } from '../../../application/hardcoded'
import { MovieThumb } from '../../user/userDataTypes'

export const MovieCoverSmall = (input: MovieThumb) => {

    return(
        <figure className="movieCard" key={input.id}>
            <img className="img"src= {`${thumbnailUrl}${input.cover}`} alt= {input.title} />
        </figure>
    )
}