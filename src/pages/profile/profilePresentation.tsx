import { UserWatchlist } from '../user/userDataTypes';
import { MovieCoverSmall } from './components/movieCoverSmall';
import React from 'react'


export const ProfilePresentation = (watchlist: UserWatchlist): JSX.Element => {
// Add links for tabs:
// - profile/watchlist
// - profile/favorites
// - profile/ratings


    return (
        <div>
            {
                watchlist.movies.map(MovieCoverSmall)
            }
        </div>
    )
}