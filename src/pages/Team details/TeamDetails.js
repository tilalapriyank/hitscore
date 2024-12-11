import React, { Component } from "react";
import { useParams } from "react-router-dom"; // Hook to access matchId
import Schedule from "./Schedule";
import Results from "./Results";
import News from "./News";
import Players from "./Players";
import Stats from "./Stats";

class TeamDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "schedule",
    };
  }

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  renderTabContent() {
    const { activeTab } = this.state;
    const { teamId } = this.props;

    switch (activeTab) {
      case "schedule":
        return <Schedule teamId={teamId} />;
      case "results":
        return <Results teamId={teamId} />;
      case "news":
        return <News teamId={teamId} />;
      case "players":
        return <Players teamId={teamId} />;
      case "stats":
        return <Stats teamId={teamId} />;
      default:
        return <Schedule teamId={teamId} />;
    }
  }

  render() {
    const { teamName } = this.props;

    return (
      <div className="container mt-4">
        <h2 className="text-center mb-4">{teamName}</h2>
        <ul className="nav nav-tabs">
          {["schedule", "results", "news", "players", "stats"].map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${
                  this.state.activeTab === tab ? "active" : ""
                }`}
                onClick={() => this.setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content mt-4">{this.renderTabContent()}</div>
      </div>
    );
  }
}

// Functional wrapper component to get matchId from URL
const TeamTabsWrapper = () => {
  const { teamId } = useParams(); // Get matchId from URL params
  return <TeamDetails teamId={teamId} />; // Pass matchId to class component as a prop
};

export default TeamTabsWrapper;
