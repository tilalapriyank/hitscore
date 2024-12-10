import React, { Component } from "react";
import { useParams } from "react-router-dom"; // Hook to access matchId

import MatchInfo from "./MatchInfo";
import MatchScorecard from "./MatchScorecard";
import MatchCommentary from "./MatchCommentary";
import MatchSquads from "./MatchSquads";

class MatchTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchData: null,
      activeTab: "info",
    };
  }

  async componentDidMount() {
    const { matchId } = this.props; // Access matchId passed as a prop
    if (matchId) {
      const infourl = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}`;
      const headers = {
        // "X-RapidAPI-Key": "368af94cf6msh643b0a2deb7379dp1c9b02jsn34e51b16fb12", //my
        // "X-RapidAPI-Key": "5e49f223b1msh47d713ec8467bcfp186a96jsn1a7b4b20677f",
        "X-RapidAPI-Key": "87be1248f9msh187428a9aedb8ecp1673a9jsn3b0b1387b645",
        // "X-RapidAPI-Key": "dd76d23715msh3ae2c9a68068085p1e4b89jsnb016433712a0",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      };
      const response = await fetch(infourl, { headers });
      const data = await response.json();
      // console.log(data);
      this.setState({ matchData: data });
    }
  }

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  renderContent = () => {
    const { activeTab, matchData } = this.state;
    const {matchId} = this.props;

    if (!matchData) {
      return <div>Loading...</div>; // Add a loading indicator until matchData is available
    }

    switch (activeTab) {
      case "info":
        return <MatchInfo matchInfo={matchData} />;
      case "scorecard":
        return <MatchScorecard matchId={matchId} />;
      case "commentary":
        return <MatchCommentary matchData={matchData} />;
      case "squads":
        return <MatchSquads MatchSquads={matchData} />;
      default:
        return <MatchInfo matchInfo={matchData} />;
    }
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="container my-5">
        {/* Match Header */}
        <div className="match-header bg-primary text-white text-center py-4 rounded">
          <h2>
            {this.state.matchData
              ? `${this.state.matchData.matchInfo.team1.name} vs ${this.state.matchData.matchInfo.team2.name} - ${this.state.matchData.matchInfo.matchDescription} Match`
              : "Match"}
          </h2>
          <h6>
            {this.state.matchData
              ? `${this.state.matchData.matchInfo.series.name}`
              : "Series"}
          </h6>
          <p>
            Venue:{" "}
            {this.state.matchData
              ? `${this.state.matchData.matchInfo.venue.name}, ${this.state.matchData.matchInfo.venue.city}`
              : " "}{" "}
            | Date:{" "}
            {this.state.matchData
              ? `${new Date(
                  this.state.matchData.matchInfo.matchStartTimestamp
                ).toLocaleString("en-US", {
                  month: "short", // Dec
                  day: "2-digit", // 05
                  hour: "2-digit", // 10
                  minute: "2-digit", // 00
                  hour12: true, // AM/PM
                })} - ${new Date(
                  this.state.matchData.matchInfo.matchCompleteTimestamp
                ).toLocaleString("en-US", {
                  month: "short", // Dec
                  day: "2-digit", // 09
                  hour: "2-digit", // 10
                  minute: "2-digit", // 00
                  hour12: true, // AM/PM
                })}, LOCAL`
              : "Loading..."}
          </p>
        </div>

        {/* Tabs Navigation */}
        <ul className="nav nav-pills justify-content-center mt-4">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "info" ? "active" : ""}`}
              onClick={() => this.setActiveTab("info")}
            >
              Info
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "scorecard" ? "active" : ""
              }`}
              onClick={() => this.setActiveTab("scorecard")}
            >
              Scorecard
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "commentary" ? "active" : ""
              }`}
              onClick={() => this.setActiveTab("commentary")}
            >
              Commentary
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "squads" ? "active" : ""}`}
              onClick={() => this.setActiveTab("squads")}
            >
              Squads
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content mt-4">{this.renderContent()}</div>
      </div>
    );
  }
}

// Functional wrapper component to get matchId from URL
const MatchTabsWrapper = () => {
  const { matchId } = useParams(); // Get matchId from URL params
  return <MatchTabs matchId={matchId} />; // Pass matchId to class component as a prop
};

export default MatchTabsWrapper;
