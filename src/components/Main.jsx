import React from 'react'
import {Article} from './Article'
import boar from '../img/boar.png'
import dog from '../img/dog.png'
import elephant from '../img/elephant.png'
import giraffe from '../img/giraffe.png'
import hippo from '../img/hippo.png'
import panda from '../img/panda.png'
import rabbit from '../img/rabbit.png'
import rhino from '../img/rhino.png'
import sloth from '../img/sloth.png'

const articles = [
    { alt: 'boar', src: boar, title: 'Some Title Here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis lacus porttitor, facilisis ipsum ut, fermentum orci. Duis et tempor leo, malesuada convallis augue. Vivamus et vestibulum arcu, id tempor enim. Phasellus lacinia nunc luctus suscipit ornare.'},
    { alt: 'dog', src: dog, title: 'Some Title Here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis lacus porttitor, facilisis ipsum ut, fermentum orci. Duis et tempor leo, malesuada convallis augue. Vivamus et vestibulum arcu, id tempor enim. Phasellus lacinia nunc luctus suscipit ornare.'},
    { alt: 'elephant', src: elephant , title: 'Some Title Here', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis lacus porttitor, facilisis ipsum ut, fermentum orci. Duis et tempor leo, malesuada convallis augue. Vivamus et vestibulum arcu, id tempor enim. Phasellus lacinia nunc luctus suscipit ornare.'},
    { alt: 'giraffe', src: giraffe, title: 'Some Title Here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis lacus porttitor, facilisis ipsum ut, fermentum orci. Duis et tempor leo, malesuada convallis augue. Vivamus et vestibulum arcu, id tempor enim. Phasellus lacinia nunc luctus suscipit ornare.'},
    { alt: 'hippo', src: hippo, title: 'Some Title Here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis lacus porttitor, facilisis ipsum ut, fermentum orci. Duis et tempor leo, malesuada convallis augue. Vivamus et vestibulum arcu, id tempor enim. Phasellus lacinia nunc luctus suscipit ornare.'},
    { alt: 'panda', src: panda, title: 'Some Title Here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis lacus porttitor, facilisis ipsum ut, fermentum orci. Duis et tempor leo, malesuada convallis augue. Vivamus et vestibulum arcu, id tempor enim. Phasellus lacinia nunc luctus suscipit ornare.'},
    { alt: 'rabbit', src: rabbit, title: 'Some Title Here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis lacus porttitor, facilisis ipsum ut, fermentum orci. Duis et tempor leo, malesuada convallis augue. Vivamus et vestibulum arcu, id tempor enim. Phasellus lacinia nunc luctus suscipit ornare.'},
    { alt: 'rhino', src: rhino, title: 'Some Title Here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis lacus porttitor, facilisis ipsum ut, fermentum orci. Duis et tempor leo, malesuada convallis augue. Vivamus et vestibulum arcu, id tempor enim. Phasellus lacinia nunc luctus suscipit ornare.'},
    { alt: 'sloth', src: sloth, title: 'Some Title Here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis lacus porttitor, facilisis ipsum ut, fermentum orci. Duis et tempor leo, malesuada convallis augue. Vivamus et vestibulum arcu, id tempor enim. Phasellus lacinia nunc luctus suscipit ornare.'}
]


export const Main = () => {
    console.log('The Main component has (re)rendered')
    return <main>
        {articles.map(article => <Article key={article.alt} {...article}/>)}
    </main>
}