import { MovieThumb, UserMovieList } from '../user/userDataTypes'
import { MovieCoverSmall } from './components/movieCoverSmall'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { filterListType, returnGenresAndCounts } from '../movie/movieUtils'
import { sideBarFilterItem } from '../movie/movieTypes'
import { listType, profileSub } from './profileTypes'

export const ProfilePresentation = (all: UserMovieList, sub: profileSub): JSX.Element => {
    
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
                    {`Watchlist`}
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
                    {`Ratings`}
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
                    {`Favorites`}
                </NavLink>
            </header>
        <div className='content'>
            <main>
            <ul className='movieGrid' key='weqe'>
                { 
                    all &&
                    filterListType(all,sub).map(MovieCoverSmall)
                }
            </ul>
            </main>
            {
                all && 
                <aside className='left-sidebar'>
                    {
                        returnGenresAndCounts(filterListType(all,sub)).map(item => {
                                return (
                                    <>
                                        {
                                        <div>
                                        <input 
                                            id={`checkbox-${item.title}`}
                                            key={`checkbox-${item.title}`}
                                            type="checkbox"
                                            checked={selectedGenre === item.title}
                                            onChange={() => {
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
            }
        </div>
        </div>
    )
}

