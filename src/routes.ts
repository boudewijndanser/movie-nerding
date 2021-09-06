import { HomeContainer } from './components/home'
import movieContainer from './components/movie/movieContainer'

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
  ]