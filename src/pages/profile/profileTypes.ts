import { UserMovieList } from '../user/userDataTypes'
import { profileSub } from './profilePresentation'

export type ProfileProps = {
    watchlist?: UserMovieList
    ratings?: UserMovieList
    favorites?: UserMovieList
}

export type ProfileParam = {
    sub: profileSub
  }