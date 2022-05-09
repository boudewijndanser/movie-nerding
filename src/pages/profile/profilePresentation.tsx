import { UserMovieList } from '../user/userDataTypes'
import { MovieCoverSmall } from './components/movieCoverSmall'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { filterListType, returnGenresAndCounts } from '../movie/movieUtils'
import { profilePresentation, profileSub } from './profileTypes'
import { SideBar } from '../movie/components/sidebar';
import { ProfileSidebar } from './components/profileSidebar';


export const ProfilePresentation = (props: profilePresentation): JSX.Element => {

    return (
        <div className='content'>
            <main>
                <ul className='movieGrid' key='weqe'>
                    { 
                        props.movies &&
                        props.movies.map(MovieCoverSmall)
                    }
                </ul>
            </main>
                {
                    ProfileSidebar({genres: props.genres, selectedGenre: ''})
                }
        </div>
    )
}

