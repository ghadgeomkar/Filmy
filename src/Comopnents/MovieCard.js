import React, { useEffect } from 'react'
import { useDrag } from 'react-dnd'

const MovieCard = ({ poster_path, movie }) => {



    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'image',
        item: { movieInfo: movie },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))



    return (poster_path &&
        <div>
            <div>
                <img
                    src={'https://image.tmdb.org/t/p/w200' + poster_path}
                    alt="movie_poster"
                    ref={drag}
                    style={{ opacity: isDragging ? '0.5' : '1' }}
                />
            </div>
        </div>
    )
}

export default MovieCard

