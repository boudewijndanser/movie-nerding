import { UserWatchlist } from '../user/userDataTypes';
import { ProfilePresentation } from './profilePresentation';

export type ProfileProps = {
    watchlist?: UserWatchlist
}
export const ProfileContainer = (props: ProfileProps ): JSX.Element => {

    return (
        <div>
            {
                props.watchlist !== undefined &&
                ProfilePresentation(props.watchlist)
            }
        </div>
    )

}