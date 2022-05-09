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
                                return (
                                    <>
                                        {
                                        <div>
                                            <input 
                                                id={`checkbox-${item.title}`}
                                                key={`checkbox-${item.title}`}
                                                type="checkbox"
                                                checked={props.selectedGenre === item.title}
                                                onChange={() => {
                                                    if (props.selectedGenre !== item.title) {
                                                    console.log('---> Set selectedGenre: ', item.title)
                                                    } else {
                                                        console.log('---> Remove selectedGenere: ', item.title)
                                                    }
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

