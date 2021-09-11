import { Director } from '../movieTypes'

export const DirectorCompoment = (input: Director): JSX.Element => {
    return (
      <>
        <h5>{input.name}</h5>
        <h6>{input.job.join(", ")}</h6>
      </>
    )
  }