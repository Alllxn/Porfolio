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
                    <div id='presentation-content-image'>
                        <img src={me} alt='me' id='presentation-image' className="magic-background" width="250"/>
                    </div>
                    <div id='presentation-content-text'>
                        <hgroup>
                            <h1 className='magic-background-underline'>Allan Bastian Espinoza Ibañez</h1> 
                            <WritterLoop />
                        </hgroup>
                        <ul id="home-media-links">
                            <li>
                                <a href="https://github.com/Alllxn" rel="nofollow noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon="fa-brands fa-github-square"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/allanEspinozaIba%C3%B1ez/" rel="nofollow noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon="fa-brands fa-linkedin"/>
                                </a>
                            </li>
                            {/* <li>
                                <a href="">
                                    <FontAwesomeIcon icon="fa-brands fa-instagram-square"/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon="fa-brands fa-twitter-square"/>
                                </a>
                            </li> */}
                            <li>
                                <a href="tel:+34615460628">
                                    <FontAwesomeIcon icon="fa-solid fa-square-phone" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:allan.esib@gmail.com">
                                    <FontAwesomeIcon icon="fa-solids fa-envelope-square"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="presentation-cta">
                    <button id="button-resume" className="button-home-actions">
                        <span>
                            📂
                        </span>
                        <span>
                            Resume
                        </span>     
                    </button>
                    <button id="button-hire-me" className="button-home-actions">
                        <span>
                            🔥
                        </span>
                        <span>
                            Hire me
                        </span>    
                    </button>
                </div>
            </div>
        </header>
    )
}