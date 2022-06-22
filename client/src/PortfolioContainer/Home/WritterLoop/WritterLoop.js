import React from 'react';
import Typical from 'react-typical'
// import './WritterLoop.css'

export default class WritterLoop extends React.Component { // 
    render() {
      return (
        // <div id='WritterLoop'>
            <Typical
                loop={Infinity}
                steps={[
                    "Web developer👽",
                    1000, 
                    "Web Designer🎨",
                    1000,
                    "Curiosity personified🍀",
                    1000,
                    "Problem solver🚀",
                    1000 
                ]}
                wrapper="h2"
            />
        // </div>
      );
    }
  } 