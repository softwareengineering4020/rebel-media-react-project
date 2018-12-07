import React from 'react';

const Intro = props => (
  <p className="App-intro">
    {props.message}, {props.user && props.user}
  </p>
);

export default Intro;