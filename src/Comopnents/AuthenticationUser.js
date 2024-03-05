import React, { useEffect, useState } from 'react'
import Header from './Header'
// import { BG_IMAGE } from '../Utils/Constant'
import BG_IMAGE from '../Images/bg_logo.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { toggelPage } from '../Store/ShowAuthPageSlice'
import LogIn from './LogIn'
import LoginHeader from './LoginHeader'

const AuthenticationUser = () => {


  const showAuthPage = useSelector(store => store.showAuthPage.val)

  const dispatch = useDispatch()


  return (
    <>
      <LoginHeader />
      {
        showAuthPage ?
          <div className='authenticationUserSeaction'>
            <div className='authenticationUser'>
              <div>
                <img className='authenticationUserBgImage' src={BG_IMAGE} alt="bg_image" />
                <div className='userWelcomeText'>
                  <h1>Welcome to Filmy</h1>
                  <button onClick={() => dispatch(toggelPage())} >Sing In</button>
                </div>
              </div>
            </div>
          </div> :
          <LogIn />

      }

    </>
  )
}
export default AuthenticationUser