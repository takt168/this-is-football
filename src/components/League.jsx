import React from 'react';
import {
  getAllClubsInLeague,
  getLeagueData,
  getNextFifteenGamesForLeague,
  getLastFifteenGamesForLeague,
  getLeagueTable
} from '../services/api-helper';
import { Link } from 'react-router-dom';

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

      <>
        <img src={this.state.leagueData.strBanner} alt={this.state.leagueData.strLeague} />
        {(this.state.leagueData.strBanner === null && <h1>{this.state.leagueData.strLeague}</h1>)}

        <section id="club-logo-section">
          {this.state.clubs.map(club => (
            <div className="small-logo" key={club.idTeam}>
              <Link to={`/Club/${club.idTeam}`}>
                <img src={club.strTeamBadge} alt={club.strTeam} />
              </Link>
            </div>
          ))}
        </section>

        <section>
          <h1>Last 15</h1>
          {
            this.state.lastGames.map(game => (
              <div className="event-detail" key={game.idEvent}>
                <p>{game.strEvent}</p>
                <p>{game.dateEvent}</p>
              </div>
            ))
          }

          <h1>Next 15</h1>
          {
            this.state.nextGames.map(game => (
              <div className="event-detail" key={game.idEvent}>
                <p>{game.strEvent}</p>
                <p>{game.dateEvent}</p>
              </div>
            ))
          }

          <h1>League Table</h1>
          {
            this.state.table.map(team => (
              <div className="event-detail" key={team.teamid}>
                <p>{team.name}</p>
                <p>{team.total}</p>
              </div>
            ))
          }


        </section >
      </>
    );
  };
}