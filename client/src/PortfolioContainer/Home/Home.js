import React from 'react';
import me from '../../assets//home/me.png';
import WritterLoop from './WritterLoop/WritterLoop';
import './Home.css';

export default function Home() {
    return (
        <header id='home-container' className='componente'>
            <div id='home-section'>
                <div id='presentation-content'>
                    <div id='presentation-content-image'>
                        <img src={me} alt='me' id='presentation-image'/>
                    </div>
                    <hgroup id='presentation-content-text'>
                        <h1>Hi, I'm Allan.</h1> 
                        <WritterLoop />
                    </hgroup>
                </div>
            </div>
        </header>
    )
}