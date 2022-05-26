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
                    "An ethusiastic developer👽",
                    1000,
                    "Full Stack Developer🌍",
                    1000,
                    "Front End Developer👾",
                    1000, 
                    "Back End Developer⚙️",
                    1000,
                    "The curiosity personified🍀",
                    1000,
                    "Problem solver🚀",
                    1000 
                ]}
                wrapper="span"
            />
        </h2>
      );
    }
  } 