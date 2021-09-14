import { 
  useState, 
  useEffect
} from "react"
import { 
  MovieBase, 
  People, 
  ProductionCompanies, 
  Tmdb
} from "./movieTypes"
import {
  parseMovieData,
  parsePeople,
  ParseProductionCompany,
} from "./movieParsers"
import {
  movieDetailUrl,
  apiKey,
  appendCredits
} from "../../application/hardcoded"
import { 
  useParams, 
  withRouter 
} from 'react-router-dom'
import { MoviePresentation } from './moviePresentation';


const MovieContainer = (): JSX.Element => {
  const [loading, setLoading] = useState(true)
  let MovieId: movieParam = useParams()

  type movieParam = {
    number: string
  }

  const [movieBase, setMovieBase] = useState<MovieBase | undefined>(undefined)
  const [people, setPeople] = useState<People | undefined>(undefined)
  const [productionCompanies, setProductionCompanies] = useState<ProductionCompanies | undefined>()

  useEffect(() => {
    const url = movieDetailUrl + MovieId.number + "?api_key=" + apiKey + appendCredits

    const fetchMovieById = async () => {
      setLoading(true)

      const response = await fetch(url)
      const json:Tmdb = await response.json()

      setMovieBase(parseMovieData(json))
      setPeople(parsePeople(json.credits))
      setProductionCompanies(json.production_companies ? json.production_companies.map(ParseProductionCompany) : [])
      productionCompanies !== undefined ? console.log(productionCompanies) : console.log('Not loaded...')
      
      setLoading(false)
    }

    fetchMovieById()
  }, [MovieId])

  return (
    <div className='movieDetail'>
      {
        loading && <p>Loading...</p>
      }
      {
        movieBase !== undefined && 
        people !== undefined &&
        productionCompanies !== undefined &&
          MoviePresentation(movieBase, people, productionCompanies)
      }
      <div className="backgroundColor"></div>
    </div>
  )
}

export default withRouter(MovieContainer)