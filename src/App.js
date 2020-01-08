import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import League from './components/League';
import Club from './components/Club';
import Player from './components/Player';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';

import {
  getAllFootballLeagues, getTodaysGames,
  getTomorrowsGames,
  getSaturdayGames,
  getSundayGames
} from './services/api-helper';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      leagues: [],
      todaysGames: [],
      tomorrowsGames: [],
      saturdayGames: [],
      sundayGames: []
    }
  }

  componentDidMount = async () => {
    const leagues = await getAllFootballLeagues();
    const todaysGames = [];//await getTodaysGames();
    const tomorrowsGames = [];//await getTomorrowsGames();
    const saturdayGames = [];//await getSaturdayGames();
    const sundayGames = [];//await getSundayGames();

    this.setState({
      leagues,
      todaysGames,
      tomorrowsGames,
      saturdayGames,
      sundayGames
    });
  }

  render() {
    return (

      <div className="app" >

        <Header />
        <Route exact path="/" render={() =>
          (<Main
            leagues={this.state.leagues}
            todaysGames={this.state.todaysGames}
            tomorrowsGames={this.state.tomorrowsGames}
            saturdayGames={this.state.saturdayGames}
            sundayGames={this.state.sundayGames}
          />)} />
        <Route path="/League/:idLeague" render={(props) => (<League idLeague={props.match.params.idLeague} />)} />
        <Route path="/Club/:idTeam" render={(props) => (<Club idTeam={props.match.params.idTeam} />)} />
        <Route path="/Player/:idPlayer" render={(props) => (<Player idPlayer={props.match.params.idPlayer} />)} />

        <Footer />

      </div>
    );
  }
}
export default App;
