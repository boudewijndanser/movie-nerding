import { UserMovieList } from '../user/userDataTypes'
import { ProfilePresentation } from './profilePresentation'

export type ProfileProps = {
    watchlist?: UserMovieList
    ratings?: UserMovieList
    favorites?: UserMovieList
}
export const ProfileContainer = (props: ProfileProps ): JSX.Element => {

    return (
        <div>
            {
                props.watchlist !== undefined &&
                props.ratings !== undefined &&
                props.favorites !== undefined &&
                ProfilePresentation(props.watchlist, props.ratings, props.favorites)
            }
        </div>
    )

}