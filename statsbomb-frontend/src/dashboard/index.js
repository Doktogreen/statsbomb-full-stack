import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Matches from './bar-chart/visualization/matches';
import Teams from './bar-chart/visualization/teams';
import './styles.scss';

export default function Dashboard() {
  const [filterByMatchStatus, setFilterByMatchStatus] = useState("match");
  const [filterByTeamStatus, setFilterByTeamStatus] = useState("teams");
  const [page, setPage] = useState(1);

  const PageSwitch = (e) => {
    e.preventDefault();
    if (page === 1 ) {
      setPage(2)
    }else {
      setPage(1)
    }
  };

    return(
        <div className="app-container">
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="app-icon">
              <img src='https://res.cloudinary.com/skiltime/image/upload/v1649959998/stabomb-removebg-preview_z2zzfy.png' alt='statbomb-ico' />
            </div>
          </div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <a href="#.">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="sidebar-list-item active">
              <a href="#.">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/></svg>
                <span>Football</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#.">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pie-chart">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                <span>Statistics</span>
              </a>
            </li>
            <br /><br />
            <li className="sidebar-list-item">
              <Link to="/">
                <span><b>{"<<"}</b> Logout</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="app-content">
          <div className="app-content-header">
            <h1 className="app-content-headerText">{page === 1 ? "Match" : "Team"} Analysis</h1>
            
            <div className="app-content-actions">
            <div className="app-content-actions-wrapper">
            <button onClick={PageSwitch} className="switch-button btn-primary btn-bg">
              {page === 1 ? "View Countries" : "View Matches"}
            </button>
            <label class="dropdown">
              <div class="dd-button">
              <span>Filter</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round" 
                className="feather feather-filter" ><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              </div>
              <input type="checkbox" class="dd-input" id="test" />
              <ul class="dd-menu">
                {page === 1 ? 
                  <select onChange={e => setFilterByMatchStatus(e.target.value)} 
                    value={filterByMatchStatus} className="search-bar" 
                    placeholder="Search..." type="text" >
                    <option value="match" >Filter by</option>
                    <option value="match">All match</option>
                    <option value="away">Away match</option>
                    <option value="home">Home match</option>
                  </select>
                :
                  <select onChange={e => setFilterByTeamStatus(e.target.value)} 
                    value={filterByTeamStatus} className="search-bar" 
                    placeholder="Search..." type="text" >
                    <option value="teams" >Filter by</option>
                    <option value="players">Players</option>
                    <option value="teams">Countries</option>
                  </select>
                }
              </ul>
            </label>
            </div>
          </div>
          </div>
          {page === 1 ? <Matches status={filterByMatchStatus} /> 
          : <Teams status={filterByTeamStatus} />}
        </div>
      </div>
    )
}