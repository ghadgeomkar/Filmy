import React, { useState } from 'react'
import { toggelPage } from '../Store/ShowAuthPageSlice';
import { useDispatch } from 'react-redux';
import logo from '../Images/webLogo.png'

const LoginHeader = () => {

    const [handelUser, setHandelUser] = useState(false)
    const dispatch = useDispatch()

    return (
        <div className='header'>
            <img className='webLogo'
                src={logo} alt="web_logo" width='107px' height='45px' />
            <div className='headerRightSection'>
                <div className='userLogo'>
                    <img className='userLogoImg'
                        width='40px'
                        height='40px'
                        onClick={() => setHandelUser(!handelUser)}
                        src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMTAwYzI3LjYxNCAwIDUwLTIyLjM4NiA1MC01MFM3Ny42MTQgMCA1MCAwIDAgMjIuMzg2IDAgNTBzMjIuMzg2IDUwIDUwIDUwWiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Ik04Ni43MTggODMuOTM5Qzc3LjU4MyA5My44MTYgNjQuNTE0IDEwMCA1MCAxMDBjLTE0LjczIDAtMjcuOTc0LTYuMzctMzcuMTI0LTE2LjUwNiAxLjIxMi0zLjA5IDIuOTIyLTUuOTAyIDUuMzA0LTguMjI4QzI1LjQ2IDY4LjE1NyAzOC40MjUgNjUuMjM1IDUwIDY1LjIzNWMxMS41NTQgMCAyMy42NTUgMi45MDYgMzAuOTMzIDkuOTkzIDIuNTEyIDIuNDQ2IDQuNDA1IDUuNDMgNS43ODUgOC43MVoiIGZpbGw9InVybCgjYikiLz48cGF0aCBkPSJNNjkuNTIgMzcuMTFjLjc5NC0xMi4yMTMtNS44OS0yMi4yNjYtMTkuNDY4LTIyLjI2Ni0xMy41NzkgMC0yMC4yNjMgMTAuMDUzLTE5LjQ2OCAyMi4yNjUuNzk1IDEyLjIxMyA4Ljc5NCAyMC43MDMgMTkuNDY4IDIwLjcwMyAxMC42NzMgMCAxOC42NzMtOC40OSAxOS40NjgtMjAuNzAzWiIgZmlsbD0idXJsKCNjKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMTAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzRDNzE4RSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJCNDA1MyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iNDEuNTU0IiB5MT0iMzAuMzQ3IiB4Mj0iODIuNzEyIiB5Mj0iNzEuNTM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuODUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iNDEuNTU0IiB5MT0iMzAuMzQ3IiB4Mj0iODIuNzEyIiB5Mj0iNzEuNTM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuODUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=='} alt="user_logo" />

                    {
                        handelUser ? <>
                            <div className='userDropDown'>

                                <h2 onClick={() => dispatch(toggelPage())}>Sing In</h2>

                            </div>
                        </> : ''
                    }

                </div>
            </div>
        </div>
    )
}

export default LoginHeader