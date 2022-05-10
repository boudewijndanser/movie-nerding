
import { MovieCoverSmall } from './components/movieCoverSmall'
import { profilePresentation } from './profileTypes'
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
                    ProfileSidebar({genres: props.genres, selectedGenres: props.selectedGenres, passGenre: props.passGenre})
                }
        </div>
    )
}

