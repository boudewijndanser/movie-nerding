import { UserMovieList } from '../user/userDataTypes'

export type profileSubTypes = 'watchlist' | 'favorites' | 'ratings'
export type profileSub = profileSubTypes | undefined

export type ProfileProps = {
    all: UserMovieList
}

export type ProfileParam = {
    sub: profileSub
  }

export type listType = types | undefined

export type types = 'ratings' | 'watchlist' | 'favorites'
