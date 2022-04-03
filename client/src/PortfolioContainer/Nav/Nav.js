import React from 'react';
import extraterrestre from '../../assets/home/extraterrestre.png';
// import Profile from './Profile/Profile'
// import Footer from './Footer/Footer'
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faMessage } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
    return (
        <div id='nav-container'>
            <button id='nav-drawer'>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div id='nav-left' className='part-nav'>
                <a href='.' id='enlace-home'>
                    <img id='imagen-nav' src={extraterrestre} alt='alien-cabecera'></img>
                    <div>
                        <p>Allan Espinoza</p>
                        <p>Web Developer</p>
                    </div>
                </a>
            </div>
            <div id='nav-right' className='part-nav'>
                <ul>
                    <li>
                        <a href='#home-section'>
                            <FontAwesomeIcon icon={faHouseUser}/>
                            {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
                            <span className='magic_underline'>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href='#home-section'>
                            <FontAwesomeIcon icon={faHistory}/>
                            <span className='magic_underline'>Work</span>
                        </a>
                    </li>
                    <li>
                        <a href='#home-section'>
                        {/* <FontAwesomeIcon icon="fa-solid fa-message-code" /> */}
                            <FontAwesomeIcon icon={faMessage}/>
                            <span className='magic_underline'>Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}