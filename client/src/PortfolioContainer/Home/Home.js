import React from 'react';
import me from '../../assets//home/me.png';
import WritterLoop from './WritterLoop/WritterLoop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import './Home.css';

export default function Home() {
    return (
        <header>
            <div id='home-container' className='componente'>
                <div id='presentation-content-image' className='home-part magic-background'>
                    <img src={me} alt='me' id='presentation-image' width="200"/>
                </div>
                <div id='presentation-content-text'>
                    <hgroup className='home-part'>
                        <h1 className='magic-background-underline'>Allan Bastian Espinoza Ibañez</h1> 
                        <WritterLoop />
                    </hgroup>
                    <ul id="home-media-links">
                        <li>
                            <FontAwesomeIcon icon="fa-brands fa-github" size='2x'/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFacebook} size='2x'/>
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}