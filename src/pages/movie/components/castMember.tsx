import { Actor } from '../movieTypes'

export const CastMember = (input: Actor): JSX.Element => {
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
  
          <figcaption className='figcaption'>
            <h5>{input.character}</h5>
            <h6>{input.name}</h6>
          </figcaption>
        </>
      }
    </figure>
    )
  }