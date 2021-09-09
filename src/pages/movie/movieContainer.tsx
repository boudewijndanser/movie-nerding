import React, { 
  useState, 
  useEffect
} from "react"
import { 
  Actor,
  Director, 
  Genre, 
  MovieBase, 
  People, 
  Tmdb
} from "./movieTypes"
import {
  parseMovieData,
  parsePeople,
} from "./movieParsers"
import {
  movieDetailUrl,
  apiKey,
  appendCredits
} from "../../application/hardcoded"
import { outputHoursAndMinutes } from "./movieUtils"
import { 
  useParams, 
  withRouter 
} from 'react-router-dom'


const MovieContainer = (): JSX.Element => {
  const [loading, setLoading] = useState(true)
  // const [error, setError] = useState()
  let MovieId: movieParam = useParams()

  type movieParam = {
    number: string
  }

  const [movieBase, setMovieBase] = useState<MovieBase | undefined>(undefined)
  const [people, SetPeople] = useState<People | undefined>(undefined)

  useEffect(() => {
    const url = movieDetailUrl + MovieId.number + "?api_key=" + apiKey + appendCredits

    const fetchMovieById = async () => {
      setLoading(true)

      const response = await fetch(url)
      const json:Tmdb = await response.json()

      setMovieBase(parseMovieData(json))
      SetPeople(parsePeople(json.credits))
      setLoading(false)
    }

    fetchMovieById()
  }, [MovieId])

  return (
    <div>
      {
        loading && <p>Loading...</p>
      }

      {
        movieBase !== undefined && 
            <>
            <h1>{movieBase.title}</h1>
            <h2>{movieBase.tagline}</h2>
            <p>{movieBase.score}</p>
            <p>{movieBase.releaseDate}</p>
            <div className='genreContainer'>{movieBase.genres && movieBase.genres.map(GenreLabel)}</div>
            <p>{outputHoursAndMinutes(movieBase.runtime)}</p>
            <p>{movieBase.description}</p>
            <>{movieBase.director && DirectorCompoment(movieBase.director)}</>
            <div className='movieCast'>{people?.cast.slice(0,5).map(CastMemberComponent)}</div>
            </>
      }
    </div>
  )
}

export const DirectorCompoment = (input: Director): JSX.Element => {
  return (
    <>
      <b>{input.name}</b>
      <p>{input.job.join(", ")}</p>
    </>
  )
}

export const GenreLabel = (input: Genre): JSX.Element => {
  return (
    <div key={`${input.name}-${input.id}`} className='genreTag'>
      {
        <a href={`https://www.themoviedb.org/genre/${input.id}`}>
          {input.name}
        </a>
      }
    </div>
  )
}

export const CastMemberComponent = (input: Actor): JSX.Element => {
  return (
    <figure key={`${input.name}-${input.id}`} className='personCard'>
    {
      <>
        <img 
        loading="lazy"
        className='personImg'
        src={input.image} 
        alt={input.name}>
        </img>

        <figcaption>
          <h5>{input.character}</h5>
          <h6>{input.name}</h6>
        </figcaption>
      </>
    }
  </figure>
  )
}

export default withRouter(MovieContainer)