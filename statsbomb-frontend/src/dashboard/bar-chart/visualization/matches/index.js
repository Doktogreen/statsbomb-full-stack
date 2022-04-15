
import React, {useState, useEffect} from 'react';
import StackedBarChart from "../index";
import { match_colors } from "../../colors";
import team_data from '../../../../utilities/datas/team-data.json';
import match_data from '../../../../utilities/datas/match-data.json';
import "../index.scss";
import { match_keys } from "../../keys";


// Restructuring team_data to away team, home team, and all team
const away_team_id = team_data.map(t => ({...t, team_away_id: t.team_id}));
const away_team_name = away_team_id.map(t => ({...t, team_away_name: t.team_name}));
const away_team = away_team_name.map(t => ({...t, team_away_color: t.team_first_color}));

const home_team_id = team_data.map(t => ({...t, team_home_id: t.team_id}));
const home_team_name = home_team_id.map(t => ({...t, team_home_name: t.team_name}));
const home_team = home_team_name.map(t => ({...t, team_home_color: t.team_first_color}));

// Manipulating datas based on Team_id
let awayTeamData = away_team.map((team)=> {
  let haveEqualId = (match) => match.match_away_team_id === team.team_away_id 
    || match.match_away_team_id === team.team_id;
  let teamWithEqualId = match_data.find(haveEqualId);
  return Object.assign({}, team, teamWithEqualId);
});

const with_home_key = awayTeamData.map(m => (
  {...m, total_home_score: m.match_away_penalty_score+m.match_away_score}));

const all_match_data = with_home_key.map(m => (
  {...m, total_away_score: m.match_home_penalty_score+m.match_home_score}));

let homeTeamData = home_team.map((team)=> {
  let haveEqualId = (match) => match.match_away_team_id === team.team_id 
    || match.match_home_team_id === team.team_home_id;
  let teamWithEqualId = match_data.find(haveEqualId);
  return Object.assign({}, team, teamWithEqualId);
});

let allTeamData = all_match_data.map((match)=> {
  let haveEqualId = (home) => home.team_home_id === match.match_home_team_id
  let teamWithSameId = home_team.find(haveEqualId);
  return Object.assign({}, match, teamWithSameId);
});

const all_keys = [...match_keys];

export default function Matches({status}) {
  const [keys, setKeys] = useState(all_keys);

  // Console log every piece of available data
  useEffect(() => {
    console.log(away_team);
    console.log(home_team);
    console.log(all_match_data);
    console.log(homeTeamData);
    console.log(awayTeamData);
    console.log(allTeamData);
  }, [status]);

  return (
    <div className="stacked-chart">
      <div className="fields fields-scroll">
        {all_keys.map(key => (<div key={key} className="field">
            <input
              id={key}
              type="checkbox"
              checked={keys.includes(key)}
              onChange={e => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])));
                } else {
                  setKeys(keys.filter(_key => _key !== key));
                }
              }}
            /><br />
            <label htmlFor={key} style={{ color: match_colors[key], fontSize: "12px" }}>
              { 
                key === "team_away_name" ? "Away country name" :
                key === "team_home_name" ? "Home country name" :
                key === "match_away_penalty_score" ? "Away penalty score" :
                key === "match_away_score" ? " Away score" :
                key === "total_away_score" ? "Total away score" :
                key === "match_home_penalty_score" ? "Home penalty score" :
                key === "match_home_score" ? "Home score" :
                key === "percentage" ? "Match percentage" : key
              }
            </label>
          </div>
        ))}
      </div>
      <StackedBarChart colors={match_colors} 
        data={status === "match" ? allTeamData : status === "away" 
        ? awayTeamData : status === "home" ? homeTeamData : allTeamData} 
        keys={keys} 
      />
    </div>
  );
}
