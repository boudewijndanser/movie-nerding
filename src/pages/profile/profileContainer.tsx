import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { filterListType, returnGenresAndCounts } from '../movie/movieUtils'
import { ProfilePresentation } from './profilePresentation'
import { ProfileProps, ProfileParam, subNav } from './profileTypes'

export const ProfileContainer = (props: ProfileProps ): JSX.Element => {

      let { sub } = useParams<ProfileParam>()

      const [selectedGenres, setSelectedGenres] = useState<number[]>([])
    
      const passSelectedGenre = (input: number):number[] => {
   
        let output:number[] = selectedGenres
        
        if (input && selectedGenres && !selectedGenres.includes(input)){
            output.push(input)
        }
     
        setSelectedGenres(output)
    
        return output
    }

    let profileSub: subNav = [
        {
           to: '/profile/watchlist',
           title: 'Watchlist',
           count: filterListType(props.all, 'watchlist').length
        },
        {
            to: '/profile/ratings',
            title: 'Ratings',
            count: filterListType(props.all, 'ratings').length
         },
         {
            to: '/profile/favorites',
            title: 'Favorites',
            count: filterListType(props.all, 'favorites').length
         }
    ]

    return (
        <div key='profileContainer'>
            {
                props.all !== undefined &&
                props.all.length > 0 &&
                sub !== undefined &&
                <ProfilePresentation
                    movies={filterListType(props.all,sub)}
                    selectedGenres={selectedGenres} 
                    genres={returnGenresAndCounts(props.all)}
                    passGenre={passSelectedGenre}
                    subNav={profileSub}
                />
            }
        </div>
    )
}