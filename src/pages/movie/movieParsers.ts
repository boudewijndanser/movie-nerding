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
  Tmdb,
  UserMovieDetail,
  UserMovieDetailResponse
} from "./movieTypes"

export const parseMovieData = (data: Tmdb): MovieBase => ({
  title: data.original_title,
  tagline: data.tagline,
  cover: data.poster_path,
  releaseDate: data.release_date,
  runtime: data.runtime,
  description: data.overview,
  director: data.credits.crew ? parseDirector(data.credits.crew) : undefined,
  genres: data.genres ? data.genres : undefined,
  score: data.vote_average
})

export const parseActor = (data: CastEntity): Actor => ({
  id: data.id,
  name: data.name,
  character: data.character,
  image: data.profile_path ? `${personThumbnailUrlLarge}/${data.profile_path}` : ''
})

export const parseCrewMember = (data: CrewEntity): Crew => ({
  id: data.id,
  name: data.name,
  department: data.department,
  job: data.job,
  image: data.profile_path ? `${personThumbnailUrlLarge}/${data.profile_path}` : ''
})

export const parsePeople = (data: Credits): People => {

  let mappedCast = data.cast ? data.cast.map(parseActor) : []
  let mappedCrew = data.crew ? data.crew.map(parseCrewMember) : []

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