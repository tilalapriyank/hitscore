import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "../assets/image/image";

export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      activeTab: "international", // default tab
    };
  }

  async fetchTeams(tab) {
    try {
      const infourl = `https://cricbuzz-cricket.p.rapidapi.com/teams/v1/${tab}`;
      const headers = {
        "X-RapidAPI-Key": "dd76d23715msh3ae2c9a68068085p1e4b89jsnb016433712a0",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      };
      const response = await fetch(infourl, { headers });
      const data = await response.json();
      this.setState({ teams: data.list || [] });
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  }

  componentDidMount() {
    this.fetchTeams(this.state.activeTab);
  }

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab }, () => {
      this.fetchTeams(tab);
    });
  };

  render() {
    const { teams, activeTab } = this.state;

    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Teams</h1>
        <ul className="nav nav-tabs mb-4">
          {["international", "domestic", "women", "league"].map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? "active" : ""}`}
                onClick={() => this.handleTabChange(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className="row">
          {teams.length === 0 ? (
            <p className="text-center">Loading teams...</p>
          ) : (
            teams.map((team) =>
              team.teamId ? (
                <div className="col-md-4 mb-4" key={team.teamId}>
                  <div className="card h-100">
                    <div className="row no-gutters">
                      <div className="col-4">
                        <Image imageId={team.imageId} width={"90%"}/>
                      </div>
                      <div className="col-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            <a
                              href={`/team/${team.teamId}`}
                              className="stretched-link text-decoration-none"
                            >
                              {team.teamName}
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )
          )}
        </div>
      </div>
    );
  }
}
