import React, { useEffect, useState } from 'react'
import logo from '../Images/webLogo.png'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../Utils/Firebase';
import { useDispatch } from 'react-redux';
import { toggelPage, userLoginStatus } from '../Store/ShowAuthPageSlice';
import { useDrop } from 'react-dnd';
import { Link } from 'react-router-dom';
import searchIcon from '../Images/search-regular-24 (1).png'
import closeIcon from '../Images/x-regular-24.png'
import menuIcon from '../Images/menu-regular-24.png'

const Header = () => {

    const [handelUser, setHandelUser] = useState(false)
    const [userLogIn, setuserLogIn] = useState(false)
    const [search, setSeach] = useState(false)
    const [mobile, setmobile] = useState(false)
    const [getQuery, setgetQuery] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getWatchListMovie = JSON.parse(localStorage.getItem('watchList'))


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuserLogIn(!userLogIn)
                dispatch(userLoginStatus())
            } else {

            }
        });
        return () => unsubscribe
    }, [])

    const handelLogOut = () => {
        signOut(auth).then(() => {
            navigate('/')


        }).catch((error) => {
            // An error happened.
        });
    }

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
            {
                userLogIn && <div className='mobileMenu'>
                    <img src={mobile ? closeIcon : menuIcon} alt="menu" onClick={() => setmobile(!mobile)} />
                    {mobile && <div className='mobileMenuSections'>
                        <Link to='/home'>
                            <h2>Home</h2>
                        </Link>
                        <Link to='/watchlist'>
                            <h2 style={{ scale: isOver ? '1.1' : '1', transition: '0.2s' }} >WacthList</h2>
                            {/* {
                                getWatchListMovie.length > 0 && <p className='watchListCount'>{getWatchListMovie.length}</p>
                            } */}
                            <p className='watchListCount'>0</p>
                        </Link>
                    </div>}
                </div>
            }
            <img className='webLogo'
                src={logo} alt="web_logo" width='107px' height='45px' />
            <div className='headerRightSection'>

                <div ref={drop} className='watchList'>
                    {
                        userLogIn && <div className='menu'>
                            <div className='menuSections'>
                                <Link to='/home'>
                                    <h2>Home</h2>
                                </Link>
                                <Link to='/watchlist'>
                                    <h2 style={{ scale: isOver ? '1.1' : '1', transition: '0.2s' }} >WacthList</h2>
                                    {/* {
                                        getWatchListMovie.length > 0 && <p className='watchListCount'>{getWatchListMovie.length}</p>
                                    } */}
                                    <p className='watchListCount'>0</p>
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
                    }
                </div>

                <div className='userLogo'>
                    <img className='userLogoImg'
                        width='40px'
                        height='40px'
                        onClick={() => setHandelUser(!handelUser)}
                        src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMTAwYzI3LjYxNCAwIDUwLTIyLjM4NiA1MC01MFM3Ny42MTQgMCA1MCAwIDAgMjIuMzg2IDAgNTBzMjIuMzg2IDUwIDUwIDUwWiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Ik04Ni43MTggODMuOTM5Qzc3LjU4MyA5My44MTYgNjQuNTE0IDEwMCA1MCAxMDBjLTE0LjczIDAtMjcuOTc0LTYuMzctMzcuMTI0LTE2LjUwNiAxLjIxMi0zLjA5IDIuOTIyLTUuOTAyIDUuMzA0LTguMjI4QzI1LjQ2IDY4LjE1NyAzOC40MjUgNjUuMjM1IDUwIDY1LjIzNWMxMS41NTQgMCAyMy42NTUgMi45MDYgMzAuOTMzIDkuOTkzIDIuNTEyIDIuNDQ2IDQuNDA1IDUuNDMgNS43ODUgOC43MVoiIGZpbGw9InVybCgjYikiLz48cGF0aCBkPSJNNjkuNTIgMzcuMTFjLjc5NC0xMi4yMTMtNS44OS0yMi4yNjYtMTkuNDY4LTIyLjI2Ni0xMy41NzkgMC0yMC4yNjMgMTAuMDUzLTE5LjQ2OCAyMi4yNjUuNzk1IDEyLjIxMyA4Ljc5NCAyMC43MDMgMTkuNDY4IDIwLjcwMyAxMC42NzMgMCAxOC42NzMtOC40OSAxOS40NjgtMjAuNzAzWiIgZmlsbD0idXJsKCNjKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMTAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzRDNzE4RSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJCNDA1MyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iNDEuNTU0IiB5MT0iMzAuMzQ3IiB4Mj0iODIuNzEyIiB5Mj0iNzEuNTM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuODUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iNDEuNTU0IiB5MT0iMzAuMzQ3IiB4Mj0iODIuNzEyIiB5Mj0iNzEuNTM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuODUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=='} alt="user_logo" />

                    {
                        handelUser ? <>
                            <div className='userDropDown'>
                                {
                                    userLogIn ? <h2 onClick={handelLogOut}>Log Out</h2> :
                                        <h2 onClick={() => dispatch(toggelPage())}>Sing In</h2>
                                }
                            </div>
                        </> : ''
                    }

                </div>
            </div>
        </div >
    )
}

export default Header
