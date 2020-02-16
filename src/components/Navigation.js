import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="company-logo-container">
                    <Link to="/" id="logo" title="React Practice Grounds">
                        RPG
                    </Link>
                </div>
                <div className="company-nav-container">
                    <ul>
                        <li>
                            <NavLink to="/" title="">
                                <i className="fab fa-atlassian"></i>
                                Nav 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" title="">
                                <i className="fab fa-atlassian"></i>
                                Nav 2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" title="">
                                <i className="fab fa-atlassian"></i>
                                Nav 3
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" title="">
                                <i className="fab fa-atlassian"></i>
                                Nav 4
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" title="">
                                <i className="fab fa-atlassian"></i>
                                Nav 5
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}