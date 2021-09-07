import { HomeContainer } from '../pages/home/home'
import movieContainer from '../pages/movie/movieContainer'
import authenticationContainer1 from '../pages/authentication/authenticationContainer1'
import authenticationContainer2 from '../pages/authentication/authenticationContainer2'

export interface Router {
    path: string
    name: string
    exact: boolean
    component: any
    props?: any
  }
  
  export interface Page {
    name: string
  }
  
  export const routes: Router[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeContainer,
        exact: true
    },
    {
        path: '/movie/:number',
        name: 'Movie detail',
        component: movieContainer,
        exact: true
    },
    {
      path: '/auth/',
      name: 'Authenticate',
      component: authenticationContainer1,
      exact: true
  },
  {
    path: '/approved/',
    name: 'Approved',
    component: authenticationContainer2,
    exact: true
  }
  ]