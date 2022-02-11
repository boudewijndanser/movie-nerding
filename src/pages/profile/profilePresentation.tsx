import { UserMovieList } from '../user/userDataTypes'
import { MovieCoverSmall } from './components/movieCoverSmall'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { returnGenresAndCounts } from '../movie/movieUtils'
import { sideBarFilterItem } from '../movie/movieTypes'

export type profileSubTypes = 'watchlist' | 'favorites' | 'ratings'
export type profileSub = profileSubTypes | undefined

export const ProfilePresentation = (watchlist: UserMovieList, ratings: UserMovieList, favorites: UserMovieList, sub: profileSub): JSX.Element => {
    
    let sideBar = returnGenresAndCounts(ratings)
    console.log('Ratings: ', ratings)

     const[selectedGenre, setSelectedGenre] = useState<string | undefined>(undefined)
    useEffect(() => {
        console.log('selectedGenre: ', selectedGenre)
    }, [selectedGenre])

    return (
        <div className='container'>
            <header>
                <NavLink 
                    to="/profile/watchlist" 
                    activeStyle={{
                        fontWeight: "bold",
                        color: "black",
                        backgroundColor: 'white'
                    }} className='tablink'
                >
                    {`( ${watchlist.length} ) Watchlist`}
                </NavLink>
                <NavLink 
                    to="/profile/ratings"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "black",
                        backgroundColor: 'white'
                    }}
                    activeClassName="selected" 
                    className='tablink'
                >
                    {`( ${ratings.length} ) Ratings`}
                </NavLink>
                <NavLink 
                    to="/profile/favorites"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "black",
                        backgroundColor: 'white'
                    }} 
                    activeClassName="selected" 
                    className='tablink'
                >
                    {`( ${favorites.length} ) Favorites`}
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
                    ratings && sub === 'ratings' 
                    && selectedGenre != undefined &&
                    ratings.filter(item => item.movieData?.genres.includes(selectedGenre))
                    .map(MovieCoverSmall)
                }

                { 
                    ratings && sub === 'ratings' 
                    && selectedGenre == undefined &&
                    ratings.map(MovieCoverSmall)
                }
                { 
                    favorites && sub === 'favorites' &&
                    favorites.map(MovieCoverSmall)
                }
            </ul>
            </main>
            <aside className='left-sidebar'>
                {
                    sideBar.map(item => {
                        return (
                            <>
                                {
                                <div>
                                <input 
                                    id={`checkbox-${item.title}`}
                                    key={`checkbox-${item.title}`}
                                    type="checkbox"
                                    checked={selectedGenre === item.title}
                                    onClick={() => {
                                        if (selectedGenre !== item.title) {
                                        setSelectedGenre(item.title)
                                        } else {
                                            setSelectedGenre(undefined)
                                        }
                                    }}
                                    name={item.title}
                                />
                                <label>{`(${item.count}) ${item.title}`}</label>
                                </div>
                                }
                            </>
                        )
                    })
                }
            </aside>
        </div>
        </div>
    )
}

export const sideBarItem = (input: sideBarFilterItem): JSX.Element => {
    return (
        <>
        {
            <>
            <input 
                id={`checkbox-${input.title}`}
                key={`checkbox-${input.title}`}
                type="checkbox"
                checked={false}
                onClick={() => {
                    // setSelectedGenre(input.title)
                }}
            />

            <p>{input.title}</p>
            <p>{input.count}</p>
            </>
        }
        </>
    )
}