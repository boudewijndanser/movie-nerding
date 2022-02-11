import { useParams } from 'react-router-dom'
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
        </div>
    )

}