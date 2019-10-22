import React from 'react';
import { Link } from 'react-router-dom';

export default function Main(props) {

  return (
    <>
      <section id="main-section-league-logo">
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
      <section>
        <h1> TODAY'S MATCHES</h1>
        {props.todaysGames.map(games => (
          <div key={games.idEvent}>
            <p>{games.strEvent}</p>
          </div>
        ))}

        <h1> TOMORROW'S MATCHES</h1>
        {props.tomorrowsGames.map(games => (
          <div key={games.idEvent}>
            <p>{games.strEvent}</p>
          </div>
        ))}

        <h1> SATURDAY'S MATCHES</h1>
        {props.saturdayGames.map(games => (
          <div key={games.idEvent}>
            <p>{games.strEvent}</p>
          </div>
        ))}


        <h1> SUNDAY'S MATCHES</h1>
        {props.sundayGames.map(games => (
          <div key={games.idEvent}>
            <p>{games.strEvent}</p>
          </div>
        ))}

      </section>
    </>
  );
}