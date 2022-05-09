import { useParams } from 'react-router-dom'
import { filterListType, returnGenresAndCounts } from '../movie/movieUtils'
import { ProfilePresentation } from './profilePresentation'
import { ProfileProps, ProfileParam } from './profileTypes'

export const ProfileContainer = (props: ProfileProps ): JSX.Element => {

      let { sub } = useParams<ProfileParam>()

    return (
        <div key='profileContainer'>
            {
                props.all !== undefined &&
                props.all.length > 0 &&
                sub !== undefined &&
                ProfilePresentation({movies: filterListType(props.all,sub), selectedGenre: '', genres: returnGenresAndCounts(props.all)})
            }
        </div>
    )
}


 {/* <header>
                <NavLink 
                    to="/profile/watchlist" 
                    activeStyle={{
                        fontWeight: "bold",
                        color: "black",
                        backgroundColor: 'white'
                    }} className='tablink'
                >
                    {`Watchlist ${filterListType(all, 'watchlist').length}`}
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
                    {`Ratings ${filterListType(all, 'ratings').length}`}
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
                    {`Favorites ${filterListType(all, 'favorites').length}`}
                </NavLink>
            </header> */}