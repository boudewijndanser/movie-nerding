
import { MovieCoverSmall } from './components/movieCoverSmall'
import { profilePresentation } from './profileTypes'
import { ProfileSidebar } from './components/profileSidebar';
import { ProfileSubNav } from './components/profileSubNav';


export const ProfilePresentation = (props: profilePresentation): JSX.Element => {

    return (
        <div className='content'>
            {
                ProfileSubNav(props.subNav)
            }
            {
                ProfileSidebar({genres: props.genres, selectedGenres: props.selectedGenres, passGenre: props.passGenre})
            }
            <main>
                <ul className='movieGrid' key='weqe'>
                    { 
                        props.movies &&
                        props.movies.map(MovieCoverSmall)
                    }
                </ul>
            </main>
        </div>
    )
}

