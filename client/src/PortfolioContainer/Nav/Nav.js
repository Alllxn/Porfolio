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
        const button_nav = document.getElementById("nav-drawer");
        // console.log(button_nav.animation);
        if (navState === false) {
            setNavState(true); //change nav state to true = open
            nav.classList.remove("close-nav"); //remove the animation that closes the nav
            nav.classList.add("open-nav"); //and add the animation that opens the nav
        } else {
            setNavState(false);
            nav.classList.remove("open-nav");
            nav.classList.add("close-nav");
        }
    }

    return (
        <nav id='nav-container'>
            <button onClick={navControl} id='nav-drawer' className={!navState ? "part-nav" : "part-nav button-pressed"} >
                <FontAwesomeIcon icon={!navState ? faBars : faXmark}/>
            </button>
            <div id='nav-left' className='part-nav'>
                <a href='.' id='enlace-home'>
                    <img id='imagen-nav' src={extraterrestre} alt='alien-cabecera' width='40'></img>
                    <div>
                        <p>Allan Espinoza</p>
                        <p>Web Developer</p>
                    </div>
                </a>
            </div>
            <div id='nav-right' className='part-nav'>
                <ul>
                    <li onClick={navControl}>
                        <a href='#home-container'>
                            <span className='icon-container'><FontAwesomeIcon icon={faHouseUser} size='lg' /></span>
                            <span className='magic-underline'>Home</span>
                        </a>
                    </li>
                    <li onClick={navControl}>
                        <a href='#about-container'>
                            <span className='icon-container'><FontAwesomeIcon icon={faCrown} size='lg' /></span>
                            <span className='magic-underline'>About</span>
                        </a>
                    </li>
                    <li onClick={navControl}>
                        <a href='#work-container'>
                            <span className='icon-container'><FontAwesomeIcon icon={faHistory} size='lg' /></span>
                            <span className='magic-underline'>Work</span>
                        </a>
                    </li>
                    <li onClick={navControl}>
                        <a href='#home-container'>
                            <span className='icon-container'><FontAwesomeIcon icon={faMessage} size='lg' /></span>
                            <span className='magic-underline'>Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};