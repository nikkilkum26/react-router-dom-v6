import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h5>
                I'm Home
            </h5>
            <Link to='/dashboard'>
                Click to go to Dashboard
            </Link>
        </div>
    )
}

export default Home