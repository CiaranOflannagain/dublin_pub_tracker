import React from 'react';
import { NavLink } from 'react-router-dom';
import statsIcon from './icons/stats_icon.png';
import beerIcon from './icons/beer_icon_2.png';
import submitIcon from './icons/submit_icon.png';
import './CSS Styles/NavBar.css';

function NavigationBar() {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink to="/dublin_pub_tracker" activeClassName="active" end>
              <div className="nav-link-content">
                Home
                <img src={statsIcon} alt="Stats Icon" />
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dublin_pub_tracker/pubstats" activeClassName="active">
              <div className="nav-link-content">
                Guinness Stats
                <img src={beerIcon} alt="Beer Icon" />
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dublin_pub_tracker/submission" activeClassName="active">
              <div className="nav-link-content">
                Submit Pub Data
                <img src={submitIcon} alt="Submit Icon" />
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

export default NavigationBar;