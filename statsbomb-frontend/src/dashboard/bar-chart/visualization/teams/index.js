
import React, {useState, useEffect} from 'react';
import StackedBarChart from "../index";
import { player_colors, team_colors } from "../../colors";
import team_data from '../../../../utilities/datas/team-data.json';
import match_data from '../../../../utilities/datas/match-data.json';
import stat_data from '../../../../utilities/datas/stat-data.json';
import player_data from '../../../../utilities/datas/player-data.json';
import "../index.scss";
import { player_keys, team_keys } from "../../keys";


// Restructuring team_data to away team, home team, and all team
const away_team_id = team_data.map(t => ({...t, team_away_id: t.team_id}));
const away_team_name = away_team_id.map(t => ({...t, team_away_name: t.team_name}));
const away_team = away_team_name.map(t => ({...t, team_away_color: t.team_first_color}));

const home_team_id = team_data.map(t => ({...t, team_home_id: t.team_id}));
const home_team_name = home_team_id.map(t => ({...t, team_home_name: t.team_name}));
const home_team = home_team_name.map(t => ({...t, team_home_color: t.team_first_color}));

// Manipulating datas based on Team_id
let playersData = player_data.map((player)=> {
  let haveEqualId = (stat) => stat.player_id === player.player_id
  let playerIdInStat = stat_data.find(haveEqualId);
  return Object.assign({}, player, playerIdInStat);
});

let countries = player_data.map((player)=> {
  let haveEqualId = (country) => country.team_name === player.team_name
  let playerWithSameCountry = team_data.find(haveEqualId);
  return Object.assign({}, player, playerWithSameCountry);
});
const all_players = playersData.map(p => ({...p, country_color: 20}));

let homeTeamData = home_team.map((team)=> {
  let haveEqualId = (match) => match.match_away_team_id === team.team_id 
    || match.match_home_team_id === team.team_home_id;
  let teamWithEqualId = match_data.find(haveEqualId);
  return Object.assign({}, team, teamWithEqualId);
});

// Deducing Country code based on country name lenght to determine the bar height
const all_team_data = team_data.map( (td => td));
const all_teams = all_team_data.map(t => ({...t, country_code: t.team_name.length})); 

const all_player_keys = [...player_keys];
const all_team_keys = [...team_keys];

export default function Teams({status}) {
  const [player_keys, setPlayerKeys] = useState(all_player_keys);
  const [team_keys, setTeamKeys] = useState(all_team_keys);
  const [component, setComponent] = useState(false);
  
  // Console log every piece of available data
  useEffect(() => {
    setComponent(true);
    console.log(away_team);
    console.log(home_team);
    console.log(homeTeamData);
    console.log(all_players);
    console.log(countries);
    console.log(all_teams)
  }, [component, status]);

  return (
    <div className="stacked-chart">
      {status === "teams" ?
      <div>
        <div className="fields fields-scroll">
          {all_team_keys.map(key => (<div key={key} className="field">
              <input
                id={key}
                type="checkbox"
                checked={team_keys.includes(key)}
                onChange={e => {
                  if (e.target.checked) {
                    setTeamKeys(Array.from(new Set([...team_keys, key])));
                  } else {
                    setTeamKeys(team_keys.filter(_key => _key !== key));
                  }
                }}
              /><br />
              <label htmlFor={key} style={{ color: team_colors[key], fontSize: "12px" }}>
                { 
                  key === "country_code" ? "Countries" :
                  null
                }
              </label>
            </div>
          ))}
        </div>
        </div>
      :
        <div className="fields fields-scroll">
          {all_player_keys.map(key => (<div key={key} className="field">
              <input
                id={key}
                type="checkbox"
                checked={player_keys.includes(key)}
                onChange={e => {
                  if (e.target.checked) {
                    setPlayerKeys(Array.from(new Set([...player_keys, key])));
                  } else {
                    setPlayerKeys(player_keys.filter(_key => _key !== key));
                  }
                }}
              /><br />
              <label htmlFor={key} style={{ color: player_colors[key], fontSize: "12px" }}>
                { 
                  key === "country_color" ? "Countries" :
                  key === "goals" ? "Goal scored" :
                  key === "interceptions" ? "Interceptions" :
                  key === "left_foot_passes" ? " Left foot passes" :
                  key === "right_foot_passes" ? "Right foot passes" :
                  key === "passes" ? "Total passes" :
                  key === "completed_passes" ? "Completed passes" :
                  key === "minutes_played" ? "Minutes played" :
                  key === "player_shots_faced" ? "Player shots faced" :
                  key === "shots" ? "Shots" : 
                  key === "tackles" ? "Tackles" :
                  key === "team_possession_percentage" ? "Team possession":
                  key === "xg" ? "XG" : 
                  key === "pressure" ? "Pressure" : key
                }
              </label>
            </div>
          ))}
        </div>
        }
      {status === "players" ? 
        <StackedBarChart 
          colors={ player_colors} data={all_players} 
          keys={player_keys} component={component}
        />
      :
        <StackedBarChart 
          colors={team_colors} data={all_teams} 
          keys={team_keys} status={status}
        />
      }
    </div>
  );
}
