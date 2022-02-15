import { useParams } from 'react-router-dom'
import { ProfilePresentation } from './profilePresentation'
import { ProfileProps, ProfileParam } from './profileTypes'

export const ProfileContainer = (props: ProfileProps ): JSX.Element => {

      let { sub } = useParams<ProfileParam>()

    return (
        <div key='profileContainer'>
            {
                props.all !== undefined &&
                ProfilePresentation(props.all, sub)
            }
        </div>
    )

}