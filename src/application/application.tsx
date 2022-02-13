import { 
    BrowserRouter, 
    Route, 
    Switch
} from 'react-router-dom'
import AuthenticationContainer1 from '../pages/authentication/authenticationContainer1'
import { AuthenticationContainer2 } from '../pages/authentication/authenticationContainer2'
import MovieContainer from '../pages/movie/movieContainer'
import { HomeContainer } from '../pages/home/home'
import { LoggedInUser } from './applicationTypes'
import { 
    getCookie, 
    updateCookie
} from './cookies'
import { 
    useState, 
    useEffect
} from "react"
import { NavContainer } from '../components/navContainer'
import { 
    UserMovieList, 
    MovieResponse, 
    MovieThumb
} from '../pages/user/userDataTypes'
import { 
    accountBase, 
    apiKey
} from './hardcoded';
import { 
    addFavouriteToRating, 
    parseMovielistRepsonse
} from '../pages/user/userDataParsers'
import { ProfileContainer } from '../pages/profile/profileContainer'

function Application() {

    const [user, setUser] = useState<LoggedInUser>()
    const [watchlist, setWatchlist] = useState<UserMovieList>()
    const [favorites, setFavorites] = useState<UserMovieList>()
    const [ratings, setRatings] = useState<UserMovieList>()
    const [error, setError] = useState<boolean>(false)

    const liftUpUser = (user: LoggedInUser): void => {

        updateCookie('userId', user.ids.sessionId, 10)
        updateCookie('sessionId', user.ids.sessionId , 10)

        updateCookie('name', user.info.name, 10)
        updateCookie('username', user.info.username, 10)
        updateCookie('mugshot', user.info.mugshot, 10)
        updateCookie('country', user.info.country, 10)

        updateCookie('interfaceLanguage', user.preferences.interfaceLanguage, 10)
        updateCookie('includeAdult', user.preferences.includeAdult.toString(), 10)

        return setUser(user)
    }

    useEffect(() => {
        if(user === undefined && getCookie('mugshot') !== undefined) {
            console.log('No state, but we have cookies')

            let id = getCookie('userId')
            let sessionId = getCookie('sessionId')

            let name = getCookie('name')
            let username = getCookie('username')
            let mugshot = getCookie('mugshot')
            let country = getCookie('country')

            let interfaceLanguage = getCookie('interfaceLanguage')
            let includeAdult = getCookie('includeAdult')

            setUser(
                {
                    ids: {
                    id: Number(id),
                    sessionId
                    },
                    preferences: {
                        interfaceLanguage,
                        includeAdult: includeAdult === 'true' 
                            ? true 
                            : false
                    },
                    info: {
                        name,
                        username,
                        mugshot,
                        country
                        }
                }
            )

        }
    },[user])

    useEffect(() => {
        const url = accountBase + user?.ids.id + '/watchlist/movies?api_key=' + apiKey + '&session_id=' + user?.ids.sessionId

        const fetchWatchlist = async () => {
            try {
            const response = await fetch(url)
            const json:MovieResponse = await response.json()

            setWatchlist(parseMovielistRepsonse(json))
            } catch {
                setError(true)
            }

        }

        if(user?.ids.sessionId !== undefined) fetchWatchlist()
    },[user])

    useEffect(() => {
        const url = accountBase + user?.ids.id + '/favorite/movies?api_key=' + apiKey + '&session_id=' + user?.ids.sessionId

        const fetchFavoritelist = async () => {

            try {
                const response = await fetch(url)
                const json:MovieResponse = await response.json()

                setFavorites(parseMovielistRepsonse(json))
            } catch {
                setError(true)
            }

        }

        if(user?.ids.sessionId !== undefined) {
            fetchFavoritelist()
        }
    },[user])

    useEffect(() => {
        
        const urlWithPage = (page:number) => accountBase + 7872845 + '/rated/movies?api_key=' + apiKey + '&session_id=' + user?.ids.sessionId+'&page='+page
        
        // Variables below will be used to check if we need to load more
        
        let collectedMovies: MovieThumb[] = []
        let page: number = 1
        let totalMovies: number
            
        const fetchRatingslist = async (page:number=1): Promise<MovieThumb[] | undefined > => {
            try {
                const response = await fetch(urlWithPage(page))
                const json:MovieResponse = await response.json()
                const parsedJson: MovieThumb[]= parseMovielistRepsonse(json)

                totalMovies = json.total_results

                if(collectedMovies === []) {
                    collectedMovies = parsedJson
                } 

                if(collectedMovies !== []) {
                    collectedMovies = [...collectedMovies, ...parsedJson]

                    setRatings(collectedMovies)
                } 

                if(collectedMovies.length < totalMovies) {
                    page = page +1

                    fetchRatingslist(page)
                }
                
                return collectedMovies
            } catch {
                setError(true)
                return undefined
            }
        }

        if(user?.ids.sessionId !== undefined) {
            fetchRatingslist(page)
        }

    },[user])


    

  return (
    <div>
    { user?.info &&
        NavContainer(user.info.mugshot)
    } 
    {
        error && 
            <p>Something went wrong...</p>
    }

    {
        ratings != undefined &&
        favorites != undefined &&
        watchlist != undefined &&
        addFavouriteToRating(favorites,watchlist,ratings)
    }
     <BrowserRouter>
        <div className="wrapper">
        <div className ="content">
                <Switch>
                    <Route
                        key='1'
                        path='/'
                        exact={true}
                    >
                        <HomeContainer name={(user !== undefined && user.info !== undefined) ? user?.info.name : ''}/>
                    </Route>

                    <Route
                        key='2'
                        path='/auth'
                        exact={true}
                    >
                        <AuthenticationContainer1 />
                    </Route>
                    <Route
                        key='3'
                        path='/approved'
                        exact={true}
                    >
                        <AuthenticationContainer2 liftUp={liftUpUser}/>
                    </Route>
                    <Route
                        key='1'
                        path='/profile/:sub?'
                        exact={true}
                    >
                        <ProfileContainer 
                            watchlist={watchlist} 
                            ratings={ratings}
                            favorites={favorites}
                            />
                    </Route>
                    <Route
                        key='4'
                        path='/movie/:number'
                        exact={true}
                    >
                        <MovieContainer />

                    </Route> 

                </Switch>
                </div>
                </div>
            </BrowserRouter>
    </div>
  )
}

export default Application