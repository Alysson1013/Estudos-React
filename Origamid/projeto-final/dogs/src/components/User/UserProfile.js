import React from 'react'
import { useParams } from 'react-router'
import Feed from '../Feed/Feed'

const UserProfile = () => {
    const {user} = useParams

    return (
        <section className="container mainSection">
            <h1 className="title">
                <Feed user={user} />
            </h1>
        </section>
    )
}

export default UserProfile
