import { personThumbnailUrlLarge } from '../../application/hardcoded'
import { 
  Actor,
  CastEntity, 
  Credits, 
  Crew, 
  CrewEntity, 
  Director, 
  MovieBase, 
  People, 
  ProductionCompaniesEntity, 
  ProductionCompany, 
  Tmdb,
  UserMovieDetail,
  UserMovieDetailResponse
} from "./movieTypes"

export const parseMovieData = (input: Tmdb): MovieBase => ({
  title: input.original_title,
tagline: input.tagline,
  cover: input.poster_path,
  backdrop: input.backdrop_path,
  releaseDate: input.release_date,
  runtime: input.runtime,
  description: input.overview,
  director: input.credits.crew ? parseDirector(input.credits.crew) : undefined,
  genres: input.genres ? input.genres : undefined,
  score: input.vote_average
})

export const parseActor = (input: CastEntity): Actor => ({
  id: input.id,
  name: input.name,
  character: input.character,
  image: input.profile_path ? `${personThumbnailUrlLarge}/${input.profile_path}` : ''
})

export const parseCrewMember = (input: CrewEntity): Crew => ({
  id: input.id,
  name: input.name,
  department: input.department,
  job: input.job,
  image: input.profile_path ? `${personThumbnailUrlLarge}/${input.profile_path}` : ''
})

export const parsePeople = (input: Credits): People => {

  let mappedCast = input.cast ? input.cast.map(parseActor) : []
  let mappedCrew = input.crew ? input.crew.map(parseCrewMember) : []

  let output: People = {
    cast: mappedCast,
    crew: mappedCrew
  }

  return output
}

export const parseDirector = (input: CrewEntity[]): Director => {

  let output: Director = {
    name: '',
    id: 0,
    job: []
  }

  input.map(human => human.job === 'Director' 
    ? output = {
      name: human.name,
      id: human.id,
      job: [human.job]
    }
    : null
  )
  
  // Add other jobs to Director object too
  input.map(human => (human.id === output.id && human.job !== 'Director')
    ? output.job.push(human.job)
    : null
  )

  return output
}

export const UserMovieDetailParser = (input: UserMovieDetailResponse): UserMovieDetail => ({
  favorite: input.favorite,
  rated: input.rated,
  watchlist: input.watchlist
})

export const ParseProductionCompany = (input: ProductionCompaniesEntity): ProductionCompany => ({
  id: input.id,
  logo: input.logo_path !== null ? input.logo_path : undefined,
  name: input.name
})