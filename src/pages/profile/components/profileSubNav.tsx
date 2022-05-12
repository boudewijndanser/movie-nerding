import { NavLink } from 'react-router-dom'
import { subNav } from '../profileTypes'

export const ProfileSubNav = (props: subNav): JSX.Element => {

    return (
        <>
            {
            props.length > 0 &&
            <header>
                {
                    props.map(item => {
                        return (
                            <NavLink 
                                to={item.to}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black",
                                    backgroundColor: 'white'
                                }} className='tablink'
                                >
                                {`${item.title} ${item.count}`}
                            </NavLink>
                        )
                    })
                }
            </header>
            }
        </>
    )
}
