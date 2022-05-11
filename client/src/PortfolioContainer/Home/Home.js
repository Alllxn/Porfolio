import React from 'react';
import me from '../../assets//home/me.png';
import WritterLoop from './WritterLoop/WritterLoop';
import './Home.css';

export default function Home() {
    return (
        <div id='home-container'>
            <div id='home-section'>
                <div id='presentation-content'>
                    <div id='presentation-content-image'>
                        <img src={me} alt='me' id='presentation-image'/>
                    </div>
                    <div id='presentation-content-text'>
                        <h1>Hello, I'm Allan.</h1> 
                        <WritterLoop />
                        {/* <h2>I'm junior web developer and problem solver.</h2> */}
                    </div>
                </div>
            </div>
        </div>
    )
}