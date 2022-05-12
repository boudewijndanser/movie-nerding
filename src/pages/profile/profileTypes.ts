import { sideBarFilterItem } from '../movie/movieTypes'
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

export type profilePresentation = {
  movies: UserMovieList
  genres: sideBarFilterItem[]
  selectedGenres: number[] | []
  passGenre:  (input: number) => number[]
  subNav: subNav
}

export type profileSubNavigation = {

}

export type profileSidebar = {
  genres: sideBarFilterItem[]
  selectedGenres: number[]
  passGenre:  (input: number) => number[]
}

export type genreTitle = 'Action' | 'Adventure' | 'Animation' | 'Comedy' | 'Crime' | 'Documentary' | 'Drama' | 'Family' | 'Fantasy' | 'History' | 'Horror' | 'Music' | 'Mystery' | 'Romance' | 'Science Fiction' | 'TV Movie' | 'Thriller' | 'War' | 'Western'
export type genres = genreTitle[]


export type subNavItem = {
  to: string
  title: string
  count: number
}

export type subNav = subNavItem[]