import React from 'react';
import {useSelector} from 'react-redux'
export const PrivacyNotice = () => {
    console.log('The PrivacyNotice component has (re)rendered')

    const name = useSelector(state => state.userState.name)
    return(
        <section>
            Hi {name}. We really value your privacy.
        </section>
    )
}