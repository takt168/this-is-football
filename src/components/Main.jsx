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
        <div className="matches-table">
          <div className="match-table-item">League Name</div>
          <div className="match-table-item">Home</div>
          <div className="match-table-item">Away</div>
          <div className="match-table-item">Time (GMT)</div>
          {props.todaysGames.map(games => (
            <React.Fragment key={games.idEvent}>
              <div className="match-table-item">{games.strLeague}</div>
              <div className="match-table-item">{games.strHomeTeam}</div>
              <div className="match-table-item">{games.strAwayTeam}</div>
              <div className="match-table-item">{games.strTime}</div>
            </React.Fragment>
          ))}
        </div>

        <h1> TOMORROW'S MATCHES</h1>
        <div className="matches-table">
          <div className="match-table-item">League Name</div>
          <div className="match-table-item">Home</div>
          <div className="match-table-item">Away</div>
          <div className="match-table-item">Time (GMT)</div>
          {props.tomorrowsGames.map(games => (
            <React.Fragment key={games.idEvent}>
              <div className="match-table-item">{games.strLeague}</div>
              <div className="match-table-item">{games.strHomeTeam}</div>
              <div className="match-table-item">{games.strAwayTeam}</div>
              <div className="match-table-item">{games.strTime}</div>
            </React.Fragment>
          ))}
        </div>

        <h1> SATURDAY'S MATCHES</h1>
        <div className="matches-table">
          <div className="match-table-item">League Name</div>
          <div className="match-table-item">Home</div>
          <div className="match-table-item">Away</div>
          <div className="match-table-item">Time (GMT)</div>
          {props.saturdayGames.map(games => (
            <React.Fragment key={games.idEvent}>
              <div className="match-table-item">{games.strLeague}</div>
              <div className="match-table-item">{games.strHomeTeam}</div>
              <div className="match-table-item">{games.strAwayTeam}</div>
              <div className="match-table-item">{games.strTime}</div>
            </React.Fragment>
          ))}
        </div>

        <h1> SUNDAY'S MATCHES</h1>
        <div className="matches-table">
          <div className="match-table-item">League Name</div>
          <div className="match-table-item">Home</div>
          <div className="match-table-item">Away</div>
          <div className="match-table-item">Time (GMT)</div>
          {props.sundayGames.map(games => (
            <React.Fragment key={games.idEvent}>
              <div className="match-table-item">{games.strLeague}</div>
              <div className="match-table-item">{games.strHomeTeam}</div>
              <div className="match-table-item">{games.strAwayTeam}</div>
              <div className="match-table-item">{games.strTime}</div>
            </React.Fragment>
          ))}
        </div>

      </section>
    </>
  );
}