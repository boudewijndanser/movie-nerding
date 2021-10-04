import { UserMovieList } from '../user/userDataTypes'
import { MovieCoverSmall } from './components/movieCoverSmall'
import React from 'react'
import { NavLink } from 'react-router-dom'

export type profileSubTypes = 'watchlist' | 'favorites' | 'ratings'
export type profileSub = profileSubTypes | undefined

export const ProfilePresentation = (watchlist: UserMovieList, ratings: UserMovieList, favorites: UserMovieList, sub: profileSub): JSX.Element => {

    return (
        <div>
            <div>
                    <NavLink to="/profile/watchlist" activeStyle={{
    fontWeight: "bold",
    color: "black",
    backgroundColor: 'white'
  }} className='tablink'>
                    Watchlist
                    </NavLink>
                <NavLink to="/profile/ratings" activeClassName="selected" className='tablink'>
                    Ratings
                </NavLink>
                <NavLink to="/profile/favorites" activeClassName="selected" className='tablink'>
                    Favorites
                </NavLink>
            </div>
        <div className='media_items results'>
            <div className='page_wrapper'>
                { 
                    watchlist && sub === 'watchlist' &&
                    watchlist.movies.map(MovieCoverSmall)
                }
                { 
                    ratings && sub === 'ratings' &&
                    ratings.movies.map(MovieCoverSmall)
                }
                { 
                    favorites && sub === 'favorites' &&
                    favorites.movies.map(MovieCoverSmall)
                }
            </div>
        </div>
        </div>
    )
}