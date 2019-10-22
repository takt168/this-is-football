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

        <div>
          <p><span className="bold-text">League Name: </span>{this.state.leagueData.strLeague}</p>
        </div>
        <div>
          <p><span className="bold-text">Country: </span>{this.state.leagueData.strCountry}</p>
        </div>
        <div>
          {this.state.leagueData.strDescriptionEN
            && <p><span className="bold-text">League Bio: </span>{this.state.leagueData.strDescriptionEN}</p>}
        </div>
        
        <Social
              strFacebook={this.state.leagueData.strFacebook}
              strTwitter={this.state.leagueData.strTwitter}
              strInstagram={this.state.leagueData.strInstagram}
              strYoutube={this.state.leagueData.strYoutube}
            />



        <section id="club-logo-section">
          {this.state.clubs && this.state.clubs.map(club => (
            <div className="small-logo" key={club.idTeam}>
              <Link to={`/Club/${club.idTeam}`}>
                <img src={club.strTeamBadge} alt={club.strTeam} />
              </Link>
            </div>
          ))}
        </section>

        <section>
          {this.state.lastGames && <>
            <h1>Last 15 League Matches</h1>
            <div className="league-prev-matches-table">
              <div className="match-table-item">Date</div>
              <div className="match-table-item">Home</div>
              <div className="match-table-item"></div>
              <div className="match-table-item"></div>
              <div className="match-table-item">Away</div>
              {this.state.lastGames.map(games => (
                <React.Fragment key={games.idEvent}>
                  <div className="match-table-item">{games.dateEvent}</div>
                  <div className="match-table-item">{games.strHomeTeam}</div>
                  <div className="match-table-item">{games.intHomeScore}</div>
                  <div className="match-table-item">{games.intAwayScore}</div>
                  <div className="match-table-item">{games.strAwayTeam}</div>
                </React.Fragment>
              ))}
            </div>
          </>}
          {this.state.nextGames && <>
            <h1>Next 15 League Matches</h1>
            <div className="matches-table">
              <div className="match-table-item">Date</div>
              <div className="match-table-item">Home</div>
              <div className="match-table-item">Away</div>
              <div className="match-table-item">Time (GMT)</div>
              {this.state.nextGames && this.state.nextGames.map(games => (
                <React.Fragment key={games.idEvent}>
                  <div className="match-table-item">{games.dateEvent}</div>
                  <div className="match-table-item">{games.strHomeTeam}</div>
                  <div className="match-table-item">{games.strAwayTeam}</div>
                  <div className="match-table-item">{games.strTime}</div>
                </React.Fragment>
              ))}
            </div>
          </>}
          {!this.state.leagueData.idCup &&
            <>
              <h1>League Table</h1>
              <div className="league-table">
                <div className="match-table-item">Team</div>
                <div className="match-table-item">Games Played</div>
                <div className="match-table-item">Points</div>
                <div className="match-table-item">Win</div>
                <div className="match-table-item">Draw</div>
                <div className="match-table-item">Loss</div>
                <div className="match-table-item">GF</div>
                <div className="match-table-item">GA</div>
                <div className="match-table-item">GD</div>
                {this.state.table.map(team => (
                  <React.Fragment key={team.teamid}>
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
            </>
          }



        </section >
      </section>
    );
  };
}