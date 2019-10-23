import React from 'react';
import {
  getClubData,
  getAllPlayersInClub,
  getLastFiveGamesForClub,
  getNextFiveGamesForClub
} from '../services/api-helper';
import { Link } from 'react-router-dom';
import Social from './Social';

export default class Club extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      idTeam: props.idTeam,
      clubData: [],
      players: [],
      lastGames: [],
      nextGames: []
    }
  }

  componentDidMount = async () => {
    const clubData = await getClubData(this.state.idTeam);
    const players = await getAllPlayersInClub(this.state.idTeam);
    const lastGames = await getLastFiveGamesForClub(this.state.idTeam);
    const nextGames = await getNextFiveGamesForClub(this.state.idTeam);

    this.setState({
      clubData,
      players,
      lastGames,
      nextGames
    });
  }

  render() {
    return (


      <section id="club-section">

        <img src={this.state.clubData.strTeamBanner} alt={this.state.clubData.strTeamBadge} />
        <Social
          strFacebook={this.state.clubData.strFacebook}
          strTwitter={this.state.clubData.strTwitter}
          strInstagram={this.state.clubData.strInstagram}
          strYoutube={this.state.clubData.strYoutube}
        />
        <div className="id-section">
          <img src={this.state.clubData.strTeamJersey} alt={this.state.clubData.strTeamJersey} />
          <div>
            <div>
              <h3>{this.state.clubData.strTeam}</h3>
            </div>
            <div>
              {this.state.clubData.intFormedYear > 0
                && < p > Founded: <span className="bold-text">{this.state.clubData.intFormedYear}</span></p>}
            </div>
            <div>
              {this.state.clubData.strStadiumLocation
                && < p > Location: <span className="bold-text">{this.state.clubData.strStadiumLocation}</span></p>}
            </div>
            <div>
              <p>Country: <span className="bold-text">{this.state.clubData.strCountry}</span></p>
            </div>
            <div>
              <p>Stadium Name: <span className="bold-text">{this.state.clubData.strStadium}</span></p>
            </div>
          </div>
        </div>



        {this.state.players && <h1>Featured Players/Manager:</h1>}
        <section id="player-card-section">
          {this.state.players
            && this.state.players.map(player => (
              <div className="small-logo" key={player.idPlayer}>
                <Link to={`/Player/${player.idPlayer}`}>
                  <img src={player.strThumb} alt={player.strPlayer} />
                </Link>
              </div>
            ))}
        </section>




        <div className="matches-section">
          <div className="matches-sub-section">

            <h2>Last 5 Matches</h2>
            <div className="league-prev-matches-table">
              <div className="match-table-header">Date</div>
              <div className="match-table-header">Home</div>
              <div className="match-table-header">Score</div>
              <div className="match-table-header">Away</div>
              {this.state.lastGames.map(games => (
                <React.Fragment key={games.idEvent}>
                  <div className="match-table-item">{games.dateEvent}</div>
                  <div className="match-table-item">{games.strHomeTeam}</div>
                  <div className="match-table-item">{games.intHomeScore} - {games.intAwayScore}</div>
                  <div className="match-table-item">{games.strAwayTeam}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="matches-sub-section">
            {this.state.nextGames && <>
              <h2>Next 5 Matches</h2>
              <div className="matches-table">
                <div className="match-table-header">Date</div>
                <div className="match-table-header">Home</div>
                <div className="match-table-header">Away</div>
                <div className="match-table-header">Time (GMT)</div>
                {this.state.nextGames.map(games => (
                  <React.Fragment key={games.idEvent}>
                    <div className="match-table-item">{games.dateEvent}</div>
                    <div className="match-table-item">{games.strHomeTeam}</div>
                    <div className="match-table-item">{games.strAwayTeam}</div>
                    <div className="match-table-item">{games.strTime}</div>
                  </React.Fragment>
                ))}
              </div>
            </>}
          </div>
        </div>

      </section >
    );
  };
}