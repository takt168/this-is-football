import axios from 'axios';

export const getPremierLeague = async () => {
  const response = await axios.get("https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4328");
  console.log(response.data.leagues[0]);
  return response.data.leagues[0];
}

export const getPremierLeagueTeams = async () => {
  const response = await axios.get("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League");
  console.log(response.data.teams);
  return response.data.teams;
}
