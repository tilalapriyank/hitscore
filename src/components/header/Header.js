import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="/">
            <img src="..." alt="HitScore" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/matches">
                  Matches
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/teams">
                  Teams
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/players">
                  Players
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ranking">
                  Ranking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/archives">
                  Archives
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
