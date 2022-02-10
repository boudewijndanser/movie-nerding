import { useParams } from 'react-router-dom'
import { returnGenresAndCounts } from '../movie/movieUtils'
import { ProfilePresentation } from './profilePresentation'
import { ProfileProps, ProfileParam } from './profileTypes'

export const ProfileContainer = (props: ProfileProps ): JSX.Element => {

      let { sub } = useParams<ProfileParam>()

    return (
        <div>
            {
                props.watchlist !== undefined &&
                props.ratings !== undefined &&
                props.favorites !== undefined &&
                ProfilePresentation(props.watchlist, props.ratings, props.favorites, sub)
            }

            {
                props.ratings !== undefined &&
                returnGenresAndCounts(props.ratings)
            }
        </div>
    )

}