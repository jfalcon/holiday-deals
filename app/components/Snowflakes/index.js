import React from 'react';
import './style.scss';

const MAX_SNOWFLAKES = 84;

function Snowflakes() {
  const snowflakes = [];

  for (let x = 1; x <= MAX_SNOWFLAKES; x++) {
    snowflakes.push(<i key={`snowflake-${x}`}></i>);
  }

  // whitespace is important, unless you collapse it via styles
  // this css trick we use here is to collapse all whitespace between tags
  return <aside className="snowflakes">{snowflakes}</aside>;
}

export default Snowflakes;
