import React from 'react'
import {useSelector} from 'react-redux'

export const Article = props => {
    console.log('The Article component has (re)rendered')
    const prefersBlackAndWhite = useSelector(state => state.usabilityPreferences.prefersBlackAndWhite)
    return (
        <article>
            <img 
                src={props.src} 
                alt={props.alt} 
                className={prefersBlackAndWhite ? 'black-and-white' : ''}/>
            <div>
                <h2>{props.title}</h2>
                <p>{props.body}</p>
            </div>
        </article>
    )
}