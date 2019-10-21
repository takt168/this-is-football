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


      <section name="league-section">

        <h1>Last 15</h1>
        {this.state.lastGames.map(game => (
          <div className="event-detail" key={game.idEvent}>
            <h3>{game.strEvent}</h3>
            <h3>{game.dateEvent}</h3>
          </div>
        ))}

        <h1>Next 15</h1>
        {this.state.nextGames.map(game => (
          <div className="event-detail" key={game.idEvent}>
            <h3>{game.strEvent}</h3>
            <h3>{game.dateEvent}</h3>
          </div>
        ))}

        <h1>League Table</h1>
        {this.state.table.map(team => (
          <div className="event-detail" key={team.teamid}>
            <h3>{team.name}</h3>
            <h3>{team.total}</h3>
          </div>
        ))}

        {this.state.clubs.map(club => (
          <div className="small-logo" key={club.idTeam}>
            <div className="logo-div">
              <Link to={`/Club/${club.idTeam}`}>
                <img src={club.strTeamBadge} alt={club.strTeam} />
              </Link>
            </div>
          </div>
        ))}

      </section>
    );
  };
}