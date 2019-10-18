import React from 'react';
import './App.css';
import { getPremierLeague, getPremierLeagueTeams } from './services/api-helper';

class App extends React.Component {

  componentDidMount = () => {
    getPremierLeague();
    getPremierLeagueTeams();
  }

  render() {

    return (

      <div className="app" >

      </div>
    );
  }
}
export default App;
