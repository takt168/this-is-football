import React from 'react';
import { getPlayerData } from '../services/api-helper';

export default class Player extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      idPlayer: props.idPlayer,
      playerData: []
    }
  }

  componentDidMount = async () => {
    const playerData = await getPlayerData(this.state.idPlayer);
    this.setState({
      playerData
    });
  }

  render() {
    return (


      <section name="player-section">
        <div>
          <img src={this.state.playerData.strThumb} alt={this.state.playerData.strPlayer} />

        </div>

      </section>
    );
  };
}