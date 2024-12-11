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

  renderInningDetails(inningData, index) {
    const {
      batTeamDetails,
      bowlTeamDetails,
      partnershipsData,
      extrasData,
      scoreDetails,
      wicketsData,
    } = inningData;

    const { batsmenData } = batTeamDetails;
    const { bowlersData } = bowlTeamDetails;

    const players = Object.values(batsmenData).map((player) => ({
      name: player.batName,
      runs: player.runs || 0,
      balls: player.balls || 0,
      fours: player.fours || 0,
      sixes: player.sixes || 0,
      strikeRate: player.strikeRate || 0,
      status: player.outDesc || null,
    }));

    const bowlers = Object.values(bowlersData).map((bowler) => ({
      name: bowler.bowlName,
      overs: bowler.overs,
      maidens: bowler.maidens,
      runs: bowler.runs,
      wickets: bowler.wickets,
      economy: bowler.economy,
      no_balls: bowler.no_balls,
      wides: bowler.wides,
    }));

    const partnership = Object.values(partnershipsData).map((partner) => ({
      player1name: partner.bat1Name,
      player1runs: partner.bat1Runs,
      player2name: partner.bat2Name,
      player2runs: partner.bat2Runs,
      totalruns: partner.totalRuns,
      totalballs: partner.totalBalls,
    }));

    return (
      <div className="accordion-item" key={index}>
        <h2 className="accordion-header" id={`heading-${index}`}>
          <button
            className="accordion-button innings-card"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${index}`}
            aria-expanded={index === 0 ? "true" : "false"}
            aria-controls={`collapse-${index}`}
          >
            {batTeamDetails.batTeamName} -{" "}
            {inningData.inningsId === 1 || inningData.inningsId === 2
              ? "1st Innings"
              : "2nd Innings"}
          </button>
        </h2>
        <div
          id={`collapse-${index}`}
          className="accordion-collapse collapse"
          aria-labelledby={`heading-${index}`}
          data-bs-parent="#scorecardAccordion"
        >
          <div className="accordion-body">
            {/* Batsmen Table */}
            <h5 className="bg-secondary p-2 text-white">Batsmen</h5>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>Player</th>
                    <th>Status</th>
                    <th>Runs</th>
                    <th>Balls</th>
                    <th>
                      <i className="bi bi-circle-fill text-success"></i> 4s
                    </th>
                    <th>
                      <i className="bi bi-star-fill text-warning"></i> 6s
                    </th>
                    <th>SR</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map(
                    (player, idx) =>
                      player.status !== null && (
                        <tr key={idx}>
                          <td>{player.name}</td>
                          <td>{player.status}</td>
                          <td>{player.runs}</td>
                          <td>{player.balls}</td>
                          <td>{player.fours}</td>
                          <td>{player.sixes}</td>
                          <td>{player.strikeRate}</td>
                        </tr>
                      )
                  )}
                  <tr className="table-info">
                    <td colSpan="2">Extras</td>
                    <td colSpan="5">
                      {`No Balls: ${extrasData.noBalls}, Wides: ${extrasData.wides}, Byes: ${extrasData.byes}, Leg Byes: ${extrasData.legByes}, Penalty: ${extrasData.penalty}`}
                    </td>
                  </tr>
                  <tr className="table-warning">
                    <td colSpan="2">Total Score</td>
                    <td colSpan="5">
                      {`${scoreDetails.runs} runs (${scoreDetails.wickets} wickets, ${scoreDetails.overs} overs, RR: ${scoreDetails.runRate})`}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Fall of Wickets */}
            {wicketsData && Object.keys(wicketsData).length > 0 && (
              <div className="mt-3">
                <h6 className="bg-secondary p-2 text-white">Fall of Wickets</h6>
                <p>
                  {Object.values(wicketsData)
                    .map(
                      (wicket) =>
                        `${wicket.batName}: ${wicket.wktRuns}-${wicket.wktNbr} (${wicket.wktOver} overs)`
                    )
                    .join(" | ")}
                </p>
              </div>
            )}

            {/* Bowlers Table */}
            <h5 className="bg-secondary p-2 text-white">Bowlers</h5>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>Bowler</th>
                    <th>Overs</th>
                    <th>Maidens</th>
                    <th>Runs</th>
                    <th>Wickets</th>
                    <th>No Balls</th>
                    <th>Wides</th>
                    <th>Economy</th>
                  </tr>
                </thead>
                <tbody>
                  {bowlers.map((bowler, idx) => (
                    <tr key={idx}>
                      <td>{bowler.name}</td>
                      <td>{bowler.overs}</td>
                      <td>{bowler.maidens}</td>
                      <td>{bowler.runs}</td>
                      <td>{bowler.wickets}</td>
                      <td>{bowler.no_balls}</td>
                      <td>{bowler.wides}</td>
                      <td>{bowler.economy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Partnership Section */}
            {partnership.length > 0 && (
              <div className="mt-3">
                <h6 className="bg-secondary p-2 text-white">Partnership</h6>
                <table className="table table-sm table-striped">
                  <tbody>
                    {partnership.map((partner, idx) => {
                      const player1Contribution =
                        (partner.player1runs / partner.totalruns) * 100;
                      const player2Contribution =
                        (partner.player2runs / partner.totalruns) * 100;

                      return (
                        <tr key={idx}>
                          {/* Player 1 */}
                          <td className="align-middle">
                            <p>
                              {partner.player1name} ({partner.player1runs})
                            </p>
                          </td>

                          {/* Progress Bars in the middle column */}
                          <td className="align-middle">
                            <div
                              className="progress mt-2"
                              style={{ height: "10px" }}
                            >
                              <div
                                className="progress-bar progress-bar-striped bg-success"
                                role="progressbar"
                                style={{ width: `${player1Contribution}%` }}
                                aria-valuenow={player1Contribution}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                              <div
                                className="progress-bar progress-bar-striped bg-warning"
                                role="progressbar"
                                style={{ width: `${player2Contribution}%` }}
                                aria-valuenow={player2Contribution}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                            <p className="text-center text-muted m-0">{`${partner.totalruns} (${partner.totalballs})`}</p>
                          </td>

                          {/* Player 2 */}
                          <td className="text-end align-middle">
                            <p>
                              {partner.player2name} ({partner.player2runs})
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { scoreCard } = this.state;

    return (
      <div className="container mt-4">
        <div className="accordion" id="scorecardAccordion">
          {scoreCard.length > 0 ? (
            scoreCard.map((inning, index) =>
              this.renderInningDetails(inning, index)
            )
          ) : (
            <p>Loading scorecard...</p>
          )}
        </div>
      </div>
    );
  }
}

export default MatchScorecard;
