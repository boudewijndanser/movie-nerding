import { UserMovieList } from '../user/userDataTypes'
import { MovieCoverSmall } from './components/movieCoverSmall'
import React from 'react'
import { NavLink } from 'react-router-dom'

export type profileSubTypes = 'watchlist' | 'favorites' | 'ratings'
export type profileSub = profileSubTypes | undefined

export const ProfilePresentation = (watchlist: UserMovieList, ratings: UserMovieList, favorites: UserMovieList, sub: profileSub): JSX.Element => {

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
            
            { watchlist && sub === 'watchlist' &&
                watchlist.movies.map(MovieCoverSmall)
            }
            { ratings && sub === 'ratings' &&
                ratings.movies.map(MovieCoverSmall)
            }
            { favorites && sub === 'favorites' &&
                favorites.movies.map(MovieCoverSmall)
            }
        </div>
    )
}