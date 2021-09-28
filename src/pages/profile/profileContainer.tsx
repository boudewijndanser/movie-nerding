import { useParams } from 'react-router-dom'
import { UserMovieList } from '../user/userDataTypes'
import { ProfilePresentation, profileSub } from './profilePresentation'

export type ProfileProps = {
    watchlist?: UserMovieList
    ratings?: UserMovieList
    favorites?: UserMovieList
}
export const ProfileContainer = (props: ProfileProps ): JSX.Element => {

    type ParamType = {
        sub: profileSub
      }
      
      let { sub } = useParams<ParamType>()

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