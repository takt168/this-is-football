import React from 'react';
import { Link } from 'react-router-dom';

export default function Main(props) {

  return (
    <main>
      <section id="main-section-league-logo">
        {props.leagues.map(league => (
          <div className="player-card-box" key={league.idLeague}>
            <div className="small-logo" >
              <div className="logo-div">
                <Link to={`/League/${league.idLeague}`}>
                  <img src={league.strBadge} alt={league.strLeague} />
                  <p className="small-logo-name">{league.strLeague}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="matches-section">
        <div className="matches-sub-section">


          <h2> TODAY'S MATCHES</h2>
          <div className="league-matches-table">
            <div className="match-table-header">League Name</div>
            <div className="match-table-header">Home</div>
            <div className="match-table-header">Away</div>
            <div className="match-table-header">Time (GMT)</div>
            {props.todaysGames.map(games => (
              <React.Fragment key={games.idEvent}>
                <div className="match-table-item">{games.strLeague}</div>
                <div className="match-table-item">{games.strHomeTeam}</div>
                <div className="match-table-item">{games.strAwayTeam}</div>
                <div className="match-table-item">{games.strTime}</div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="matches-sub-section">
          <h2> TOMORROW'S MATCHES</h2>
          <div className="league-matches-table">
            <div className="match-table-header">League Name</div>
            <div className="match-table-header">Home</div>
            <div className="match-table-header">Away</div>
            <div className="match-table-header">Time (GMT)</div>
            {props.tomorrowsGames.map(games => (
              <React.Fragment key={games.idEvent}>
                <div className="match-table-item">{games.strLeague}</div>
                <div className="match-table-item">{games.strHomeTeam}</div>
                <div className="match-table-item">{games.strAwayTeam}</div>
                <div className="match-table-item">{games.strTime}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="matches-section">
        <div className="matches-sub-section">

          <h2> SATURDAY'S MATCHES</h2>
          <div className="league-matches-table">
            <div className="match-table-header">League Name</div>
            <div className="match-table-header">Home</div>
            <div className="match-table-header">Away</div>
            <div className="match-table-header">Time (GMT)</div>
            {props.saturdayGames.map(games => (
              <React.Fragment key={games.idEvent}>
                <div className="match-table-item">{games.strLeague}</div>
                <div className="match-table-item">{games.strHomeTeam}</div>
                <div className="match-table-item">{games.strAwayTeam}</div>
                <div className="match-table-item">{games.strTime}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="matches-sub-section">
          <h2> SUNDAY'S MATCHES</h2>
          <div className="league-matches-table">
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
        </div>
      </section>
    </main>
  );
}