import React from 'react';
import Typical from 'react-typical'
import './WritterLoop.css'

export default class WritterLoop extends React.Component { // 
    render() {
      return (
        <div id='WritterLoop'>
            <span>I'm </span>
            {" "}
            <Typical
                loop={Infinity}
                steps={[
                    "an ethusiastic developer👽",
                    1500,
                    "Full Stack Developer🌍",
                    1500,
                    "Front End Developer👾",
                    1500, 
                    "Back End Developer⚙️",
                    1500,
                    "the curiosity personified🍀",
                    1500,
                    "problem solver🚀",
                    1500 
                ]}
                
                // steps={[
                //   "the curiosity Personified🍀",
                //   1500
                // ]}
                wrapper="span"
            />             
        </div>
      );
    }
  } 