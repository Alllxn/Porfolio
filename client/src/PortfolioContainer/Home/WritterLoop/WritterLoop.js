import React from 'react';
import Typical from 'react-typical'
import './WritterLoop.css'

export default class WritterLoop extends React.Component { // 
    render() {
      return (
        <div id='WritterLoop'>
            {" "}
            <Typical
                loop={Infinity}
                steps={[
                    "An ethusiastic developer👽",
                    1500,
                    "Full Stack Developer🌍",
                    1500,
                    "Front End Developer👾",
                    1500, 
                    "Back End Developer⚙️",
                    1500,
                    "The curiosity personified🍀",
                    1500,
                    "Problem solver🚀",
                    1500 
                ]}
                wrapper="span"
            />             
        </div>
      );
    }
  } 