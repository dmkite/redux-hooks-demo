import React from 'react'
import { PrivacyNotice } from './PrivacyNotice';
import {Selector} from './Selector'

export const Footer = () => {
    console.log('The Footer component has (re)rendered')

    return(
        <footer>
            <section>
            Here is a footer with information you may be interested in. <br/>
            <hr/>
            3388 Edgewood Avenue<br/>
            SOUTHARD, Oklahoma 73770 <br/>
            Phone: 	559-310-5665
            </section>
            <PrivacyNotice/>
            <Selector/>
        </footer>
    )
}

