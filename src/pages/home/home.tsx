import React from 'react'

export const HomeContainer = ({title}: HomeProps): JSX.Element => {

    return (
        <>
        <p>Welcome home!</p>
        <p>{title}</p>
        </>
    )
}

type  HomeProps = { title: string }
