import React, { useState } from 'react';
import './Nav.css';
import extraterrestre from '../../assets/home/extraterrestre.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavContainer() {
    const [navState, setNavState] = useState(false);

    const navControl = () => {
        const nav = document.getElementById("nav-right");
        
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
                <FontAwesomeIcon icon={!navState ? "fa-solid fa-bars" : "fa-solid fa-xmark"}/>
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
                            <span className='icon-container'>
                                <FontAwesomeIcon icon="fa-solid fa-house-chimney" size='lg'/>
                            </span>
                            <span className='magic-underline'>Home</span>
                        </a>
                    </li>
                    <li onClick={navControl}>
                        <a href='#about-container'>
                            <span className='icon-container'>
                                {/* <FontAwesomeIcon icon={faCrown} size='lg' /> */}
                                <FontAwesomeIcon icon="fa-solid fa-address-card" size='lg'/>
                            </span>
                            <span className='magic-underline'>About</span>
                        </a>
                    </li>
                    <li onClick={navControl}>
                        <a href='#work-container'>
                            <span className='icon-container'>
                                {/* <FontAwesomeIcon icon={faHistory} size='lg' /> */}
                                <FontAwesomeIcon icon="fa-solid fa-history" size='lg'/>
                            </span>
                            <span className='magic-underline'>Work</span>
                        </a>
                    </li>
                    <li onClick={navControl}>
                        <a href='#home-container'>
                            <span className='icon-container'>
                                {/* <FontAwesomeIcon icon={faMessage} size='lg' /> */}
                                <FontAwesomeIcon icon="fa-solid fa-comments" size='lg'/>
                            </span>
                            <span className='magic-underline'>Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};