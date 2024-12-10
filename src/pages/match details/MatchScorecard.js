import React, { Component } from "react";

class MatchScorecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreCard: [],
    };
  }

  async componentDidMount() {
    const { matchId } = this.props; 
    if (matchId) {
      const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}/hscard`;
      const headers = {
        "X-RapidAPI-Key": "368af94cf6msh643b0a2deb7379dp1c9b02jsn34e51b16fb12",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      };
      const response = await fetch(url, { headers });
      const data = await response.json();
      const scoreCard = data.scoreCard || [];
      this.setState({ scoreCard });
    }
  }

  renderInningDetails(inningData) {
    const { batTeamDetails, bowlTeamDetails, timeScore } = inningData;
    const { batsmenData } = batTeamDetails;

    const players = Object.values(batsmenData).map((player) => ({
      name: player.batName,
      runs: player.runs || 0, 
      balls: player.balls || 0, 
      fours: player.fours || 0, 
      sixes: player.sixes || 0, 
      strikeRate: player.strikeRate || 0, 
      status: player.outDesc || null, 
    }));

    return (
      <div key={inningData.inningsId}>
        <div className="table-responsive mt-4">
          <table className="table table-striped">
            <thead className="scoreboard-header">
              <tr>
                <th>Player</th>
                <th>Status</th>
                <th>Runs</th>
                <th>Balls</th>
                <th>4s</th>
                <th>6s</th>
                <th>SR</th>
              </tr>
            </thead>
            <tbody>
              {players.map(
                (player, index) =>
                  player.status !== null && (
                    <tr key={index}>
                      <td>{player.name}</td>
                      <td>{player.status || ""}</td>
                      <td>{player.runs}</td>
                      <td>{player.balls}</td>
                      <td>{player.fours}</td>
                      <td>{player.sixes}</td>
                      <td>{player.strikeRate}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  render() {
    const { scoreCard } = this.state;

    return (
      <div className="container mt-4">
        {scoreCard.length > 0 ? (
          scoreCard.map((inning) => this.renderInningDetails(inning))
        ) : (
          <p>Loading scorecard...</p>
        )}
      </div>
    );
  }
}

export default MatchScorecard;
