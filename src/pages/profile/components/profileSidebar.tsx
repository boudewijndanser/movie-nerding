import React from 'react'
import { profileSidebar } from '../profileTypes'


export const ProfileSidebar = (props: profileSidebar): JSX.Element => {
 
    return (
        <>  
            {
                props.genres && 
                <aside className='left-sidebar'>
                    {
                        props.genres.map(item => {
                            let selected: boolean = props.selectedGenres.includes(item.id)
                                return (
                                    <>
                                        { 
                                        <div>
                                            <input 
                                                id={`checkbox-${item.title}`}
                                                key={`checkbox-${item.title}`}
                                                type="checkbox"
                                                checked={selected}
                                                onChange={() => {
                                                    props.passGenre(item.id)
                                                }}
                                                name={item.title}
                                            />
                                        <label>{`(${item.count}) ${item.title}`}</label>
                                        </div>
                                        }
                                    </>
                                )
                        })
                    }
                </aside>
            }
        </>
    )
}

