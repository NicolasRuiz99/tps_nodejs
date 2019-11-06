import React from "react";
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    API LastFM
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/topCharts" className="nav-link">
                            Top Charts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/artists" className="nav-link">
                            Artists
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;