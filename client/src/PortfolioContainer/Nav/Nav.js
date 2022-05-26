import React, { useState } from 'react';
import './Nav.css';
import extraterrestre from '../../assets/home/extraterrestre.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

export default function NavContainer() {
    const [navState, setNavState] = useState(false);

    const navControl = () => {
        const nav = document.getElementById("nav-right");
        if(navState === false){
            setNavState(true);
            nav.classList.add("open-nav");
            nav.classList.remove("close-nav");
        }else{
            setNavState(false);
            nav.classList.add("close-nav");
            nav.classList.remove("open-nav");
        }
    }

    return (
         <nav id='nav-container'>
                <div id='nav-section'>
                    <button onClick={navControl} id='nav-drawer' className={!navState ? 'part-nav' : 'part-nav actived-button-nav'}>
                        <FontAwesomeIcon icon={!navState ? faBars : faXmark} size='2x' />
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
                                <a href='#home-container'>
                                    <span className='icon-container'><FontAwesomeIcon icon={faHouseUser} size='lg'/></span>
                                    <span className='magic_underline'>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href='#about-me-section'>
                                    <span className='icon-container'><FontAwesomeIcon icon={faCrown} size='lg'/></span>
                                    <span className='magic_underline'>About me</span>
                                </a>
                            </li>
                            <li>
                                <a href='#work'>
                                    <span className='icon-container'><FontAwesomeIcon icon={faHistory} size='lg'/></span>
                                    <span className='magic_underline'>Work</span>
                                </a>
                            </li>
                            <li>
                                <a href='#home-section'>
                                    <span className='icon-container'><FontAwesomeIcon icon={faMessage} size='lg'/></span>
                                    <span className='magic_underline'>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
};