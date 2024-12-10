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
        "X-RapidAPI-Key": "87be1248f9msh187428a9aedb8ecp1673a9jsn3b0b1387b645",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      };
      const response = await fetch(url, { headers });
      const data = await response.json();
      const scoreCard = data.scoreCard || [];
      this.setState({ scoreCard });
    }
  }

  renderInningDetails(inningData) {
    const {
      batTeamDetails,
      bowlTeamDetails,
      timeScore,
      extrasData,
      scoreDetails,
      wicketsData,
    } = inningData;
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
        <div className="my-2 bg-dark text-white p-2">
          {batTeamDetails.batTeamName}{" "}
          {inningData.inningsId === 1 || inningData.inningsId === 2
            ? "1st Inning"
            : "2nd Inning"}
        </div>
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
              {/* Extras row */}
              <tr>
                <td colSpan="2">Extras</td>
                <td colSpan="5">
                  No Balls: {extrasData.noBalls}, Wides: {extrasData.wides},
                  Byes: {extrasData.byes}, Leg Byes: {extrasData.legByes},
                  Penalty: {extrasData.penalty}, Total: {extrasData.total}
                </td>
              </tr>
              {/* Total score row */}
              <tr>
                <td colSpan="2">Total Score</td>
                <td colSpan="5">
                  {scoreDetails.runs} runs ({scoreDetails.wickets} wickets,{" "}
                  {scoreDetails.overs} overs, RR: {scoreDetails.runRate})
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Fall of Wickets Section */}
        {wicketsData ? (
          <div className="mt-3">
            <h5 className="bg-secondary p-2 text-white">Fall of Wickets</h5>
            <div>
              {Object.values(wicketsData)
                .map(
                  (wicket) =>
                    `${wicket.batName} : ${wicket.wktRuns}-${wicket.wktNbr} (${wicket.wktOver} overs)`
                )
                .join(" | ")}
            </div>
          </div>
        ) : (
          ""
        )}
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
