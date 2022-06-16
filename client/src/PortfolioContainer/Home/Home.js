import React from 'react';
import me from '../../assets//home/me.png';
import WritterLoop from './WritterLoop/WritterLoop';
import './Home.css';

export default function Home() {
    return (
        <header>
            <div id='home-container' className='componente'>
                <div id='presentation-content-image' className='home-part magic-background'>
                    <img src={me} alt='me' id='presentation-image' width="200"/>
                </div>
                <hgroup id='presentation-content-text' className='home-part'>
                    <h1 className='magic-background-underline'>Allan Bastian Espinoza Ibañez</h1> 
                    <WritterLoop />
                </hgroup>
            </div>
        </header>
    )
}