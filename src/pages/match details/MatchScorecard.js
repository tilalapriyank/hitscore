import React, { Component } from 'react';

class MatchScorecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchDetails: {
        matchType: 'T20',
        date: '10 Dec 2024',
        venue: 'Stadium XYZ',
        teams: 'Team A vs Team B',
      },
      batting: [
        { player: 'Player 1', runs: 50, balls: 30, fours: 4, sixes: 3, strikeRate: 166.7 },
        { player: 'Player 2', runs: 20, balls: 15, fours: 2, sixes: 1, strikeRate: 133.3 },
        { player: 'Player 3', runs: 80, balls: 60, fours: 6, sixes: 4, strikeRate: 133.3 },
        // More players...
      ],
      bowling: [
        { bowler: 'Bowler 1', overs: 4, runs: 30, wickets: 2, economy: 7.5 },
        { bowler: 'Bowler 2', overs: 4, runs: 25, wickets: 1, economy: 6.25 },
        { bowler: 'Bowler 3', overs: 3, runs: 35, wickets: 0, economy: 11.67 },
        // More bowlers...
      ],
      extras: {
        wides: 5,
        noBalls: 2,
        byes: 1,
      },
      totalRuns: 200,
      totalWickets: 5,
      totalOvers: 20,
    };
  }

  render() {
    const { matchDetails, batting, bowling, extras, totalRuns, totalWickets, totalOvers } = this.state;

    return (
      <div className="scorecard">
        {/* Match Details */}
        <section className="match-details">
          <h2>Match: {matchDetails.teams}</h2>
          <p>{matchDetails.date}</p>
          <p>{matchDetails.matchType} - {matchDetails.venue}</p>
        </section>

        {/* Batting Stats */}
        <section className="batting">
          <h3>Batting</h3>
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>Runs</th>
                <th>Balls</th>
                <th>4s</th>
                <th>6s</th>
                <th>SR</th>
              </tr>
            </thead>
            <tbody>
              {batting.map((batter, index) => (
                <tr key={index}>
                  <td>{batter.player}</td>
                  <td>{batter.runs}</td>
                  <td>{batter.balls}</td>
                  <td>{batter.fours}</td>
                  <td>{batter.sixes}</td>
                  <td>{batter.strikeRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Extras */}
        <section className="extras">
          <h3>Extras</h3>
          <ul>
            <li>Wides: {extras.wides}</li>
            <li>No Balls: {extras.noBalls}</li>
            <li>Byes: {extras.byes}</li>
          </ul>
        </section>

        {/* Bowling Stats */}
        <section className="bowling">
          <h3>Bowling</h3>
          <table>
            <thead>
              <tr>
                <th>Bowler</th>
                <th>Overs</th>
                <th>Runs</th>
                <th>Wickets</th>
                <th>Economy</th>
              </tr>
            </thead>
            <tbody>
              {bowling.map((bowler, index) => (
                <tr key={index}>
                  <td>{bowler.bowler}</td>
                  <td>{bowler.overs}</td>
                  <td>{bowler.runs}</td>
                  <td>{bowler.wickets}</td>
                  <td>{bowler.economy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Match Summary */}
        <section className="match-summary">
          <h3>Match Summary</h3>
          <p>Total Runs: {totalRuns}</p>
          <p>Total Wickets: {totalWickets}</p>
          <p>Total Overs: {totalOvers}</p>
        </section>
      </div>
    );
  }
}

export default MatchScorecard;
