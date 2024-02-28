import React, { useEffect, useRef, useState } from 'react'
import { FormValidation } from '../Utils/FormValidation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import Header from './Header';


const LogIn = () => {

    const [toggel, setToggel] = useState(false)
    const [validationMsg, setValidationMsg] = useState(null)

    const navigate = useNavigate()

    const Email = useRef(null)
    const Password = useRef(null)
    const Username = useRef(null)
    // const myWorkerRef = useRef(null);

    const handelValidation = () => {
        const message = FormValidation(Email.current.value, Password.current.value)
        setValidationMsg(message);

        if (toggel && message === null) {
            createUserWithEmailAndPassword(auth, Email.current.value, Password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: Username.current.value
                    })
                    navigate('/home')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setValidationMsg(errorMessage + ' ' + errorCode);
                });

        } else if (!toggel && message === null) {
            // Sign in
            signInWithEmailAndPassword(auth, Email.current.value, Password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate('/home')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setValidationMsg(errorMessage + ' - ' + errorCode);
                });
        }
    };

    const handelLoginPage = () => {
        setToggel(!toggel)
        setValidationMsg(null)
        Email.current.value = ''
        Password.current.value = ''
    }





    return (
        <div className='logInSection'>
            <Header />
            <div className='logInPage'>
                <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg" alt="" />
                <div className='logIn'>
                    <div className='logInForm' >
                        <h2>{toggel ? 'Sing Up' : 'Sing In'} </h2>
                        {
                            toggel && <input type="text" placeholder='Enter your Username' ref={Username} />
                        }
                        <input type="text" placeholder='Enter your email' ref={Email} />
                        <input type="password" placeholder='Enter your password' ref={Password} />
                        <h5 className='formError'> {validationMsg} </h5>
                        <button onClick={handelValidation}>{toggel ? 'Sing Up' : 'Sing In'}</button>

                        {
                            toggel ? <p>already have a account? <span className='toggelBTN' onClick={handelLoginPage} > Sing In </span></p> :
                                <p>New to Filmy? <span className='toggelBTN' onClick={handelLoginPage} >Sing Up </span></p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn