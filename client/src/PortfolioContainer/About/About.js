import React, { useState } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    const [presentationState, setPresentationState] = useState(false);
    
    const presentationControl = () => {
        const presentation = document.getElementById("presentation-text");
        // const presentationButton = document.getElementById("presentation-control");
        
        if (presentationState === false) {
            setPresentationState(true); //change div state to true = open
            presentation.classList.add("open-presentation"); //and add the animation that opens the text
        } else {
            setPresentationState(false);
            presentation.classList.remove("open-presentation");
        }
    }

    return (
        <section id='about-container' className='componente'>
            <article id='about-presentation'>
                <h2 className='magic-background-underline'>Me, Mysefl & I</h2>
                <h3>
                    Hello, my name is <b>Allan Bastian Espinoza Ibáñez</b>, a 90's child born in Valparaiso, Viña del Mar in Chile 
                    and raised in Gran Canaria, Spain. 
                </h3>
                <div id='presentation-text' className='hidden'>
                    <p>
                        Since I can remember, I have been a curious person about everything related to the world of tech.
                        This has made me a multidisciplinary and organized person.
                        Before I started studying, I learned a lot about web development in a self-taught way. 
                        These first steps made me get into the world of web development.
                    </p>
                    <p>
                        A few years later, thanks to this knowledge, I started studying web develpment in 2019, 
                        at the professional training center, Grupo MBC in Las Palmas de Gran Canaria. During my training, I stood out for my grades, my teamwork and my ability to solve problems.
                        When I finished the course, the same center where I studied hired me to create their learning platforms with Moodle,
                        where I have been working until now. 
                    </p>
                    <p>
                        Currently, I am open to listen to job offers that allow me to contribute and continue growing.
                    </p>
                </div>
                <button id='presentation-control' onClick={presentationControl}>
                    <FontAwesomeIcon icon={!presentationState ? faPlus : faMinus} size='xl' />
                    {!presentationState ? "Read more..." : "Hide text..."}
                </button>
            </article>
        </section>
    )
}