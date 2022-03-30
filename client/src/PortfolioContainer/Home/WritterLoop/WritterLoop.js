import React from 'react';
import Typical from 'react-typical'
import './WritterLoop.css'

export default class WritterLoop extends React.Component { // 
    render() {
      return (
        <h2 id='WritterLoop'>
            {" "}
            <Typical
                loop={Infinity}
                steps={[
                    "Ethusiastic Dev👽",
                    1000,
                    "Full Stack Developer🌍",
                    1000,
                    "Front End Developer👾",
                    1000, 
                    "Back End Developer⚙️",
                    1000,
                    "Curiosity Personified🍀",
                    1000,
                    "problem solver",
                    1000 
                ]}
            />             
        </h2>
      );
    }
  } 