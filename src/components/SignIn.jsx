import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { logInAction, logOutAction } from '../actions';

const dummyUserDetails = {
    name: 'Dylan',
    username: 'dykite@cisco.com'
}

export const SignIn = () => {
    console.log('The SignIn component has (re)rendered')

    const dispatch = useDispatch()
    const username = useSelector(state => state.userState.username)
    console.log({username})
    const handleClick = () => {
        console.log('Sign in/out button was clicked')
        username 
            ? dispatch(logOutAction())
            : dispatch(logInAction(dummyUserDetails))
    }
    return (
        <>
        {username
            ?   <section>
                    {username} <button onClick={handleClick}>Sign out</button>
                </section>
            :   <button onClick={handleClick}>Sign in</button>
        } 
        </>
    )
}