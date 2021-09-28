import { UserMovieList } from '../user/userDataTypes'
import { MovieCoverSmall } from './components/movieCoverSmall'
import React from 'react'
import { NavLink } from 'react-router-dom'


export const ProfilePresentation = (watchlist: UserMovieList, ratings: UserMovieList, favorites: UserMovieList): JSX.Element => {
// Add links for tabs:
// - profile/watchlist
// - profile/favorites
// - profile/ratings


    return (
        <div>
            <NavLink to="/profile/watchlist" activeClassName="selected">
                Watchlist
            </NavLink>
            <NavLink to="/profile/ratings" activeClassName="selected">
                Ratings
            </NavLink>
            <NavLink to="/profile/favorites" activeClassName="selected">
                Favorites
            </NavLink>
            {
                watchlist.movies.map(MovieCoverSmall)
            }
            {
                ratings.movies.map(MovieCoverSmall)
            }
            {
                favorites.movies.map(MovieCoverSmall)
            }
        </div>
    )
}