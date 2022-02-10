import { UserMovieList } from '../user/userDataTypes'
import { MovieCoverSmall } from './components/movieCoverSmall'
import React from 'react'
import { NavLink } from 'react-router-dom'

export type profileSubTypes = 'watchlist' | 'favorites' | 'ratings'
export type profileSub = profileSubTypes | undefined

export const ProfilePresentation = (watchlist: UserMovieList, ratings: UserMovieList, favorites: UserMovieList, sub: profileSub): JSX.Element => {

    return (
        <div className='container'>
            <header>
                    <NavLink 
                    to="/profile/watchlist" 
                    activeStyle={{
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
            </header>
        <div className='content'>
            <main>
            <ul className='movieGrid' key='weqe'>
                { 
                    watchlist && sub === 'watchlist' &&
                    watchlist.map(MovieCoverSmall)
                }
                { 
                    ratings && sub === 'ratings' &&
                    ratings.map(MovieCoverSmall)
                }
                { 
                    favorites && sub === 'favorites' &&
                    favorites.map(MovieCoverSmall)
                }
            </ul>
            </main>
            <aside className='left-sidebar'>Left</aside>
        </div>
        </div>
    )
}