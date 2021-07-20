import React from 'react';
import {Fade, Bounce, Flip} from 'react-awesome-reveal';

export default function Hero() {
  return (
    <div>
      <Flip style={{height: '300px', backgroundColor: 'red'}}>
        <div>
          <Fade cascade>
            <p>I enter first...</p>
            <p>...then comes my turn...</p>
            <p>...and finally you see me!</p>
          </Fade>
          <Bounce cascade>
            <p>...and finally you see me!</p>
            <p>...then comes my turn...</p>
            <p>I enter first...</p>
          </Bounce>
        </div>
      </Flip>
    </div>
  );
}
