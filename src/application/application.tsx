import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthenticationContainer1 from '../pages/authentication/authenticationContainer1'
import AuthenticationContainer2 from '../pages/authentication/authenticationContainer2'
import movieContainer from '../pages/movie/movieContainer'
import { HomeContainer } from '../pages/home/home';

function Application() {

  return (
    <div>
     <BrowserRouter>
                <Switch>
                    <Route
                        key='1'
                        path='/'
                        exact={true}
                    >
                        <HomeContainer title='2'/>
                    </Route>

                    <Route
                        key='1'
                        path='/auth'
                        exact={true}
                    >
                        <AuthenticationContainer1 />
                    </Route>

                    <Route
                        key='2'
                        path='/approved'
                        exact={true}
                    >
                        <AuthenticationContainer2 />
                    </Route>


                    <Route
                        key='3'
                        path='/movie:number'
                        exact={true}
                        component={movieContainer}
                    /> 

                </Switch>
            </BrowserRouter>
    </div>
  )
}

export default Application