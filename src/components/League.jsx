import React from 'react';
import {
  getAllClubsInLeague,
  getLeagueData,
  getNextFifteenGamesForLeague,
  getLastFifteenGamesForLeague,
  getLeagueTable
} from '../services/api-helper';
import { Link } from 'react-router-dom';
import Social from './Social';

export default class League extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      idLeague: props.idLeague,
      leagueData: [],
      clubs: [],
      nextGames: [],
      lastGames: [],
      table: []
    }
  }

  componentDidMount = async () => {
    const leagueData = await getLeagueData(this.state.idLeague);
    const clubs = await getAllClubsInLeague(this.state.idLeague);
    const nextGames = await getNextFifteenGamesForLeague(this.state.idLeague);
    const lastGames = await getLastFifteenGamesForLeague(this.state.idLeague);
    const table = await getLeagueTable(this.state.idLeague);
    this.setState({
      leagueData,
      clubs,
      nextGames,
      lastGames,
      table
    });
  }

  render() {
    return (

      <section id="league-section">
        <img src={this.state.leagueData.strBanner} alt={this.state.leagueData.strLeague} />
        {(this.state.leagueData.strBanner === null && <h1>{this.state.leagueData.strLeague}</h1>)}

        <section id="club-logo-section">
          {this.state.clubs && this.state.clubs.map(club => (
            <div className="player-card-box" key={club.idTeam}>

              <div className="small-logo" >
                <Link to={`/Club/${club.idTeam}`}>
                  <img src={club.strTeamBadge} alt={club.strTeam} />
                  <p className="small-logo-name">{club.strTeam}</p>
                </Link>
              </div>
            </div>
          ))}
        </section>
        <div id="league-info">

          <div>
            <p><span className="bold-text">League Name: </span>{this.state.leagueData.strLeague}</p>
          </div>
          <div>
            <p><span className="bold-text">Country: </span>{this.state.leagueData.strCountry}</p>
          </div>
          <Social
            strFacebook={this.state.leagueData.strFacebook}
            strTwitter={this.state.leagueData.strTwitter}
            strInstagram={this.state.leagueData.strInstagram}
            strYoutube={this.state.leagueData.strYoutube}
          />
          <div>
            {this.state.leagueData.strDescriptionEN
              && <p><span className="bold-text">League Bio: </span>{this.state.leagueData.strDescriptionEN}</p>}
          </div>
        </div>


        {this.state.leagueData.idCup === "0" &&
          this.state.table &&
          <div id="league-table-div">
            <h2>League Table</h2>
            <div className="league-table">
              <div className="match-table-header"></div>
              <div className="match-table-header">Team</div>
              <div className="match-table-header">MP</div>
              <div className="match-table-header">Pts</div>
              <div className="match-table-header">Win</div>
              <div className="match-table-header">Draw</div>
              <div className="match-table-header">Loss</div>
              <div className="match-table-header">GF</div>
              <div className="match-table-header">GA</div>
              <div className="match-table-header">GD</div>
              {this.state.table.map((team, index) => (
                <React.Fragment key={team.teamid}>
                  <div className="match-table-item">{index + 1}</div>
                  <div className="match-table-item">{team.name}</div>
                  <div className="match-table-item">{team.played}</div>
                  <div className="match-table-item">{team.total}</div>
                  <div className="match-table-item">{team.win}</div>
                  <div className="match-table-item">{team.draw}</div>
                  <div className="match-table-item">{team.loss}</div>
                  <div className="match-table-item">{team.goalsfor}</div>
                  <div className="match-table-item">{team.goalsagainst}</div>
                  <div className="match-table-item">{team.goalsdifference}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        }


        <div className="matches-section">
          {this.state.lastGames
            &&
            <div className="matches-sub-section">
              <h2>Last 15 Matches</h2>
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
            </div>}
          {this.state.nextGames
            &&
            <div className="matches-sub-section">
              <h2>Next 15 Matches</h2>
              <div className="matches-table">
                <div className="match-table-header">Date</div>
                <div className="match-table-header">Home</div>
                <div className="match-table-header">Away</div>
                <div className="match-table-header">Time (GMT)</div>
                {this.state.nextGames && this.state.nextGames.map(games => (
                  <React.Fragment key={games.idEvent}>
                    <div className="match-table-item">{games.dateEvent}</div>
                    <div className="match-table-item">{games.strHomeTeam}</div>
                    <div className="match-table-item">{games.strAwayTeam}</div>
                    <div className="match-table-item">{games.strTime}</div>
                  </React.Fragment>
                ))}
              </div>
            </div>}
        </div >
      </section>
    );
  };
}