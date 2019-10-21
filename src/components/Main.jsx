import React from 'react';
import { Link } from 'react-router-dom';

export default function Main(props) {

  return (

    <section id="main-section">
      {props.leagues.map(league => (
        <div className="small-logo" key={league.idLeague}>
          <div className="logo-div">
            <Link to={`/League/${league.idLeague}`}>
              <img src={league.strBadge} alt={league.strLeague} />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}