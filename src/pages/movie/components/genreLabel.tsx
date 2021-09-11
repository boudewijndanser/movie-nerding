import { Genre } from '../movieTypes'

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