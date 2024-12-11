import React, { Component } from 'react';
// import './MatchDetails.css';  // Custom CSS file for styles

class MatchDetails extends Component {
  render() {
    const matchData = {
      "miniscore": {
        "batsmanStriker": {
          "name": "Nathan McSweeney",
          "runs": 10,
          "fours": 2,
          "strkRate": "83.33",
        },
        "batsmanNonStriker": {
          "name": "Usman Khawaja",
          "runs": 9,
          "fours": 1,
          "strkRate": "112.5",
        },
        "bowlerStriker": {
          "name": "Mohammed Siraj",
          "economy": "6.75",
        },
        "bowlerNonStriker": {
          "name": "Nitish Kumar Reddy",
          "economy": "8.0",
        },
        "crr": 5.7,
        "partnership": "19(20)",
        "target": 19,
        "batTeamScore": {
          "teamScore": 19
        },
        "custStatus": "Australia won by 10 wkts",
      },
      "matchHeaders": {
        "state": "Complete",
        "status": "Australia won by 10 wkts",
        "matchFormat": "TEST",
        "matchStartTimestamp": "1733457600000",
        "teamDetails": {
          "batTeamName": "AUS",
          "bowlTeamName": "IND"
        },
        "winningTeamId": 4,
        "matchDesc": "2nd Test",
        "seriesName": "India tour of Australia, 2024-25",
        "tossResults": {
          "tossWinnerName": "India",
          "decision": "Batting"
        },
      }
    };

    return (
      <div className="match-details-container">
        <div className="match-summary">
          <h3>Match Summary</h3>
          <div className="match-header">
            <div className="match-info">
              <p><strong>Description:</strong> {matchData.matchHeaders.matchDesc}</p>
              <p><strong>Series:</strong> {matchData.matchHeaders.seriesName}</p>
              <p><strong>Status:</strong> {matchData.matchHeaders.status}</p>
              <p><strong>Format:</strong> {matchData.matchHeaders.matchFormat}</p>
              <p><strong>Winning Team:</strong> {matchData.matchHeaders.teamDetails.batTeamName}</p>
              <p><strong>Result:</strong> {matchData.miniscore.custStatus}</p>
            </div>
            <div className="match-stats">
              <p><strong>Partnership:</strong> {matchData.miniscore.partnership}</p>
              <p><strong>Current Run Rate:</strong> {matchData.miniscore.crr}</p>
              <p><strong>Target:</strong> {matchData.miniscore.target}</p>
            </div>
          </div>
        </div>

        <div className="innings-stats">
          <h3>Innings Stats</h3>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Runs</th>
                <th>Fours</th>
                <th>Strike Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{matchData.miniscore.batsmanStriker.name}</td>
                <td>{matchData.miniscore.batsmanStriker.runs}</td>
                <td>{matchData.miniscore.batsmanStriker.fours}</td>
                <td>{matchData.miniscore.batsmanStriker.strkRate}</td>
              </tr>
              <tr>
                <td>{matchData.miniscore.batsmanNonStriker.name}</td>
                <td>{matchData.miniscore.batsmanNonStriker.runs}</td>
                <td>{matchData.miniscore.batsmanNonStriker.fours}</td>
                <td>{matchData.miniscore.batsmanNonStriker.strkRate}</td>
              </tr>
              <tr>
                <td>{matchData.miniscore.bowlerStriker.name}</td>
                <td>{matchData.miniscore.bowlerStriker.economy}</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>{matchData.miniscore.bowlerNonStriker.name}</td>
                <td>{matchData.miniscore.bowlerNonStriker.economy}</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MatchDetails;
