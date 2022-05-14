import React from 'react';
import './Nav.css';
import extraterrestre from '../../assets/home/extraterrestre.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';


// const navContainer = () => {
class navContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = { navState : false };
    }

    navControl = () => {
        if(this.state.navState === false){
            document.getElementById("nav-right").className += " open-nav";
            this.setState({ navState : true });
        }else{
            document.getElementById("nav-right").className = "part-nav";
            this.setState({ navState : false });
        }
    }

    // navControl = () => {
    //     console.log(document.getElementById("nav-right"));
    // }

    render(){
        return (
            <nav id='nav-container'>
                <div id='nav-section'>
                    <button onClick={this.navControl} id='nav-drawer' className='part-nav'>
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
                                    <span className='magic_underline'>Contact {this.props.className}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
            
    }
}

// function sumar(n1, n2){
//     return n1+n2;
// }

export default navContainer