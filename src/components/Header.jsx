import React from 'react';
import soccerBall from '../soccerBall.png';

import { Link } from 'react-router-dom';

export default function Header(props) {

  return (
    <header>

      {props.page === "home" ? <div></div> : <Link to="/"><div id="header-img"><img src={soccerBall} alt="ball"></img></div></Link>}
      <h1>Club Football Central</h1>
    </header>
  );
}
