import React from 'react';
import { getPlayerData } from '../services/api-helper';
import Social from './Social';

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
    window.scrollTo(0, 0);
    return (
      <section className="player-section">

        <div className="player-card">

          <div className="player-img">
            {this.state.playerData.strCutout
              ? <img src={this.state.playerData.strCutout} alt={this.state.playerData.strPlayer} />
              : <img src={this.state.playerData.strThumb} alt={this.state.playerData.strPlayer} />
            }
          </div>
          <div className="player-bio">
            <div>
              <h2>{this.state.playerData.strPlayer}</h2>
            </div>
            <div>
              <h3><span className="bold-text">Position: </span>{this.state.playerData.strPosition}</h3>
            </div>
            <div>
              <h3><span className="bold-text">Birthplace: </span>{this.state.playerData.strBirthLocation}</h3>
            </div>
            <div>
              <h3><span className="bold-text">Nationality: </span>{this.state.playerData.strNationality}</h3>
            </div>

            <Social
              strFacebook={this.state.playerData.strFacebook}
              strTwitter={this.state.playerData.strTwitter}
              strInstagram={this.state.playerData.strInstagram}
              strYoutube={this.state.playerData.strYoutube}
            />
          </div>
          <p id="player-desc"><span className="bold-text">Player Bio: </span>{this.state.playerData.strDescriptionEN}</p>
        </div>

      </section>
    );
  };
}