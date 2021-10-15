import React from 'react';
import { SignIn } from './SignIn';

export const Header = props => {
    console.log('The Header component has (re)rendered')

    return (
        <header>
            <h1>Fake Company .inc</h1>
            <SignIn/>
        </header>
    )
}