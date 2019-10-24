import axios from 'axios';
import { formatDate, tomorrowsDate, saturdayDate, sundayDate } from './date-helper';
import { sortByLeagueName } from './sort-helper';

export const getAllFootballLeagues = async () => {
  let response = await axios.get("https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?s=Soccer");
  let results = response.data.countrys;
  let newArray = [];
  //loop through array and remove objects with no badge or objects in API that aren't club competitions
  for (let i = 0; i < results.length; i++) {
    (results[i].strBadge)
      && (results[i].strLeague !== 'UEFA Nations League')
      && (results[i].strLeague !== 'UEFA Cup')
      && (results[i].strLeague !== 'Copa America')
      && (results[i].strLeague !== 'FIFA World Cup')
      && newArray.push(results[i]);
  }

  // get MLS, which doesn't come back in API call, probably due to free api limit of 50 items
  response = await axios.get("https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4346");
  results = response.data.leagues;
  //loop through array and remove objects with no badge
  for (let i = 0; i < results.length; i++) {
    (results[i].strBadge) && newArray.push(results[i]);
  }
  // get La Liga, which doesn't come back in API call, probably due to free api limit of 50 items
  response = await axios.get("https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4335");
  results = response.data.leagues;
  //loop through array and remove objects with no badge
  for (let i = 0; i < results.length; i++) {
    (results[i].strBadge) && newArray.push(results[i]);
  }

  console.log(newArray.length);

  return newArray.sort(sortByLeagueName);
}

export const getTodaysGames = async () => {
  console.log("In getTodaysGames()");
  return await getGamesByDate(formatDate(new Date()));
}

export const getTomorrowsGames = async () => {
  console.log("In getTomorrowsGames()" + formatDate(tomorrowsDate()));
  return await getGamesByDate(formatDate(tomorrowsDate()));
}

export const getSaturdayGames = async () => {
  console.log("In getSaturdayGames()" + formatDate(saturdayDate()));
  return await getGamesByDate(formatDate(saturdayDate()));
}

export const getSundayGames = async () => {
  console.log("In getSundayGames()" + formatDate(sundayDate()));
  return await getGamesByDate(formatDate(sundayDate()));
}

export const getGamesByDate = async (date) => {
  //dateformat for API call is yyyy-mm-dd
  const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=${date}&s=Soccer`);
  console.log(response.data.events);
  return response.data.events;
}

export const getLeagueData = async (idLeague) => {
  const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`);
  console.log(response.data.leagues[0]);
  return response.data.leagues[0];
}

export const getAllClubsInLeague = async (idLeague) => {
  const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${idLeague}`);
  console.log(response.data.teams);
  return response.data.teams;
}

export const getLastFifteenGamesForLeague = async (idLeague) => {
  const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${idLeague}`);
  console.log(response.data.events);
  return response.data.events;
}

export const getNextFifteenGamesForLeague = async (idLeague) => {
  const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${idLeague}`);
  console.log(response.data.events);
  return response.data.events;
}

export const getLeagueTable = async (idLeague) => {
  const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${idLeague}&s=1920`);
  console.log(response.data.table);
  return response.data.table;
}

export const getClubData = async (idTeam) => {
  const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`);
  console.log(response.data.teams[0]);
  return response.data.teams[0];
}

export const getAllPlayersInClub = async (idTeam) => {
  const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${idTeam}`);
  console.log(response.data.player);
  return response.data.player;
}

export const getLastFiveGamesForClub = async (idTeam) => {
  const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${idTeam}`);
  console.log(response.data.results);
  return response.data.results;
}

export const getNextFiveGamesForClub = async (idTeam) => {
  const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${idTeam}`);
  console.log(response.data.events);
  return response.data.events;
}



export const getPlayerData = async (idPlayer) => {
  const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${idPlayer}`);
  console.log(response.data.players[0]);
  return response.data.players[0];
}
