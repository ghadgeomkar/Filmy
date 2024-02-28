import React from 'react'
import { Link } from 'react-router-dom'


const MovieTitle = () => {



    return (
        <div className='MovieTitle'>
            <h1>The Marvels</h1>
            <p className='description'>Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City...</p>
            <Link to={'/watchmovie/' + '609681'} ><button>  Play </button> </Link>
        </div>
    )
}

export default MovieTitle