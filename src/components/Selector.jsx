import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {preferBlackAndWhiteAction} from '../actions'

export const Selector = () => {
    console.log('The Selector component has (re)rendered')

    const dispatch = useDispatch() 
    const handleChange = e => {
        console.log('Checkbox was clicked')
        dispatch(preferBlackAndWhiteAction(e.target.value))
    }
    const usabilityPreferences = useSelector(state => state.usabilityPreferences);
    return (
        <section>
            <label>
                Prefer black and white
                <input 
                    type="checkbox" 
                    checked={usabilityPreferences.prefersBlackAndWhite} 
                    aria-label="black and white selector" 
                    onChange={handleChange}/>
            </label>
        </section>
    )
}