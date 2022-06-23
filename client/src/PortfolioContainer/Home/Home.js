import React from 'react';
import me from '../../assets//home/me.png';
import WritterLoop from './WritterLoop/WritterLoop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css';

export function Home() {
    return (
        <header>
            <div id='home-container' className='componente'>
                <div id="presentation-content">
                    <div id='presentation-content-image' className='home-part magic-background'>
                        <img src={me} alt='me' id='presentation-image' width="200"/>
                    </div>
                    <div id='presentation-content-text'>
                        <hgroup className='home-part'>
                            <h1 className='magic-background-underline'>Allan Bastian Espinoza Ibañez</h1> 
                            <WritterLoop />
                        </hgroup>
                    </div>
                </div>
                <div id="presentation-cta">
                    <ul id="home-media-links">
                        <li>
                            <FontAwesomeIcon icon="fa-brands fa-github-square" size='2x'/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" size='2x'/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon="fa-brands fa-instagram-square" size='2x'/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon="fa-brands fa-twitter-square" size='2x'/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon="fa-brands fa-whatsapp-square" size='2x'/>
                        </li>
                    </ul>
                    <div id="home-actions">
                        <button id="button-resume" className="button-home-actions">Resume</button>
                        <button id="button-hire-me" className="button-home-actions">Hire me</button>
                    </div>
                </div>
            </div>
        </header>
    )
}