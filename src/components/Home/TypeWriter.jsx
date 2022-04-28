import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

export default function TypeWriter() {
  const [textColor, setTextColor] = useState('#ffcb6b');

  return (
    <div className="home-text-wrapper">
      <p>I'm</p>
      <div
        style={{ color: `${textColor}`, marginLeft: '1rem', fontWeight: 500 }}
      >
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .start()
              .typeString('Shawn Pruden')
              .pauseFor(1000)
              .deleteAll('natural')
              .callFunction(() => setTextColor('#89ddff'))
              .typeString('a React Developer')
              .pauseFor(1000)
              .deleteAll('natural')
              .callFunction(() => setTextColor('#ffcb6b'));
          }}
        />
      </div>
      <p>.</p>
    </div>
  );
}
