import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Sidenav extends Component {
    render() {
        return (
            <aside>
                <div className="sidenav">
                    <div className="list-header">
                        <h2>AllThingsTech</h2>
                        <span className="expander" title="Collapse">
                            <i className="fas fa-angle-double-left"></i>
                        </span>
                    </div>
                    <div className="list-main">
                        <div className="sidenav-card">
                            <div className="card-header">
                                <h3>Browse</h3>
                            </div>
                            <div className="card-main">
                                <div className="card-item">
                                    <div className="list-item expandable-item">
                                        <span to="/" title="Dashboards">
                                            <p>Computer Parts</p>
                                            <i className="fas fa-chevron-down"></i>
                                        </span>
                                        <ul className="drop-menu">
                                            <li>
                                                <NavLink to="/" title="">
                                                    <i className="fas fa-home"></i>
                                                    CPUs
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/" title="">
                                                    <i className="fas fa-home"></i>
                                                    Cooling
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/" title="">
                                                    <i className="fas fa-home"></i>
                                                    Motherboards
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/" title="">
                                                    <i className="fas fa-home"></i>
                                                    Memory
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/" title="">
                                                    <i className="fas fa-home"></i>
                                                    Graphics Cards
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/" title="">
                                                    <i className="fas fa-home"></i>
                                                    Hard Drives & SSDs
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/" title="">
                                                    <i className="fas fa-home"></i>
                                                    Power Supplies
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/" title="">
                                                    <i className="fas fa-home"></i>
                                                    Cases
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/" title="">
                                                    <i className="fas fa-home"></i>
                                                    Cables
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/" title="">
                                                    <i className="fas fa-home"></i>
                                                    Fans & Accessories
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="list-item expandable-item">
                                        <span to="/" title="Pages">
                                            <p>Pages</p>
                                            <i className="fas fa-chevron-down"></i>
                                        </span>
                                        <ul className="drop-menu">
                                            <li>
                                                <NavLink to="/" title="">
                                                    <i className="fas fa-home"></i>
                                                    Placeholder
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/" title="">
                                                    <i className="fas fa-home"></i>
                                                    Placeholder
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="list-item expandable-item">
                                        <span to="/" title="Applications">
                                            <p>Applications</p>
                                            <i className="fas fa-chevron-down"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidenav-card">
                            <div className="card-header">
                                <h3>My Account</h3>
                            </div>
                            <div className="card-main">
                                <div className="card-item">
                                    <div className="list-item expandable-item">
                                        <NavLink to="/" className="link" title="Dashboard">
                                            <i className="fas fa-tachometer-alt"></i>
                                            My Dashboard
                                        </NavLink>
                                        <NavLink to="/" className="link" title="My Orders">
                                            <i className="fas fa-book"></i>
                                            My Orders
                                        </NavLink>
                                        <NavLink to="/" className="link" title="Account Information">
                                            <i className="fas fa-user"></i>
                                            Account Information
                                        </NavLink>
                                        <NavLink to="/" className="link" title="Wishlist">
                                            <i className="fas fa-star"></i>
                                            Wishlist
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}