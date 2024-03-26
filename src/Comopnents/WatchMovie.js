import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_TOKEN } from '../Utils/Constant';

const WatchMovie = () => {
    const [getKey, setGetKey] = useState(null)
    const [getDetails, setgetDetails] = useState(null)
    const [watchList, setWatchList] = useState([]);
    const { id } = useParams()


    const getMovieTraler = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_TOKEN)
        const data = await res.json()
        const filterData = data.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : data.results[0]
        trailer === undefined ? setGetKey(undefined) : setGetKey(trailer.key);
    }

    const getMovieDetail = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_TOKEN)
        const data = await res.json()
        setgetDetails(data);
    }

    const handelWatchList = () => {
        const updatedWatchList = JSON.parse(localStorage.getItem('watchList')) || [];
        const isDuplicate = updatedWatchList.some(item => item.id === getDetails.id);
        if (!isDuplicate) {
            updatedWatchList.push(getDetails);
            setWatchList(updatedWatchList)

            localStorage.setItem('watchList', JSON.stringify(updatedWatchList));
        }
    }

    useEffect(() => {
        getMovieTraler()
        getMovieDetail()
    }, [])

    if (getKey === null || getDetails === null) {
        return <h1 style={{ color: 'white' }}>Loading...</h1>
    }

    return (<div>

        {getKey === undefined ? <p className='notFoundMovie'>I can't able to find this movie </p> :
            <>
                <div>
                    <div className='watchMovie'>
                        <iframe
                            width="100%"
                            height="100%"
                            src={'https://www.youtube.com/embed/' + getKey + '?rel=0&autoplay=1&mute=0'}
                            title="YouTube video player"
                            data-testid='trailer'
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='movieDetails'>
                        <div className='addWatchList'>
                            <h3>Watch Later :- </h3>
                            <button onClick={() => handelWatchList()}>Add</button>
                        </div>
                        <h1>Details</h1>
                        <div className='details'>
                            <p>Name :- {getDetails.title}</p>
                            <p>Overview :- {getDetails.overview}</p>
                            <p>Release Date :- {getDetails.release_date}</p>
                            {getDetails.imdb_id && ( // Check if imdb_id is not null
                                <p>IMDB Details :- <a href={`https://www.imdb.com/title/${getDetails.imdb_id}/?ref_=hm_tpks_tt_i_1_pd_tp1_pbr`} target='_blank' rel="noreferrer" > IMDB </a></p>
                            )}
                        </div>
                    </div>
                </div>
            </>
        }
    </div>


    )
}

export default WatchMovie