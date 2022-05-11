import React from 'react';
import './Nav.css';
import extraterrestre from '../../assets/home/extraterrestre.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';


const navContainer = () => {
    return (
        <nav id='nav-container'>
            <div id='nav'>
                <button id='nav-drawer' className='part-nav'>
                    <FontAwesomeIcon icon={faBars} size='2x' />
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
                                <FontAwesomeIcon icon={faMessage} />
                                <span className='magic_underline'>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// function sumar(n1, n2){
//     return n1+n2;
// }

export default navContainer