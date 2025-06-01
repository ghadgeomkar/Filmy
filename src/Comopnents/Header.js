import React, { useEffect, useState } from 'react'
import logo from '../Images/webLogo.png'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../Utils/Firebase';
import { useDrop } from 'react-dnd';
import { Link } from 'react-router-dom';
import searchIcon from '../Images/search-regular-24 (1).png'
import closeIcon from '../Images/x-regular-24.png'
import menuIcon from '../Images/menu-regular-24.png'

const Header = () => {

    const [handelUser, setHandelUser] = useState(false)
    const [search, setSeach] = useState(false)
    const [mobile, setmobile] = useState(false)
    const [getQuery, setgetQuery] = useState('')
    const navigate = useNavigate()
    const getWatchListMovie = JSON.parse(localStorage.getItem('watchList'))


    const handelLogOut = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setHandelUser(true)
            } else {
                setHandelUser(false)
            }
        });
    }, [])


    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'image',
        drop: (item) => getId(item.movieInfo),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))


    const getId = (info) => {
        let watchList = JSON.parse(localStorage.getItem('watchList')) || [];
        const isDuplicate = watchList.some(item => item.id === info.id);

        if (!isDuplicate) {
            watchList.push(info);
            localStorage.setItem('watchList', JSON.stringify(watchList));
        }

    }

    const handelKeyDown = (e) => {
        if (e.key === 'Enter') {
            setSeach(false)
            navigate('/searchmovie/' + getQuery)
        }
    }


    return (
        <div className='header'>
            <div className='mobileMenu'>
                <img src={mobile ? closeIcon : menuIcon} alt="menu" onClick={() => setmobile(!mobile)} />
                {mobile && <div className='mobileMenuSections'>
                    <Link to='/'>
                        <h2>Home</h2>
                    </Link>
                    <Link to='/watchlist'>
                        <h2 style={{ scale: isOver ? '1.1' : '1', transition: '0.2s' }} >Watchlist</h2>
                        {
                            getWatchListMovie === null ? <p className='watchListCount'>0</p> : <p className='watchListCount'>{getWatchListMovie.length}</p>
                        }
                    </Link>
                </div>}
            </div>

            <img className='webLogo'
                src={logo} alt="web_logo" width='107px' height='45px' />
            <div className='headerRightSection'>

                <div ref={drop} className='watchList'>
                    <div className='menu'>
                        <div className='menuSections'>
                            <Link to='/'>
                                <h2>Home</h2>
                            </Link>
                            <Link to='/watchlist'>
                                <h2 style={{ scale: isOver ? '1.1' : '1', transition: '0.2s' }} >Watchlist</h2>
                                {
                                    getWatchListMovie === null ? <p className='watchListCount'>0</p> : <p className='watchListCount'>{getWatchListMovie.length}</p>
                                }
                            </Link>
                        </div>
                        <div className='SearchMovie'>
                            <img src={search ? closeIcon : searchIcon} alt="SearchImage" onClick={() => setSeach(!search)} />
                            {search && <div className='search'>
                                <img src={searchIcon} alt="SearchImage" />
                                <input type="text" placeholder='Search' onChange={(e) => setgetQuery(e.target.value)} onKeyDown={handelKeyDown} />
                            </div>}
                        </div>
                    </div>

                </div>

                <div className='userSingInText'>
                    {handelUser ? <h3 onClick={handelLogOut}>Log Out</h3> : <Link to='/authentication' >  <h3> sign in </h3> </Link>}
                </div>
            </div>
        </div>
    )
}

export default Header
