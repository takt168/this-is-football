import React from 'react';
import {
  getClubData,
  getAllPlayersInClub,
  getLastFiveGamesForClub,
  getNextFiveGamesForClub
} from '../services/api-helper';
import { Link } from 'react-router-dom';

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


      <section name="club-section">

        <img src={this.state.clubData.strTeamBadge} alt={this.state.clubData.strTeam} />


        <h1>Last 5</h1>
        {this.state.lastGames.map(game => (
          <div className="event-detail" key={game.idEvent}>
            <h3>{game.strEvent}</h3>
            <h3>{game.dateEvent}</h3>
          </div>
        ))}

        <h1>Next 5</h1>
        {this.state.nextGames.map(game => (
          <div className="event-detail" key={game.idEvent}>
            <h3>{game.strEvent}</h3>
            <h3>{game.dateEvent}</h3>
          </div>
        ))}

        {this.state.players.map(player => (
          <div className="small-logo" key={player.idPlayer}>
            <div className="logo-div">
              <Link to={`/Player/${player.idPlayer}`}>
                <img src={player.strThumb} alt={player.strPlayer} />
              </Link>
            </div>
          </div>
        ))}

      </section>
    );
  };
}