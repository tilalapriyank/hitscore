import React, { Component } from "react";

class MatchInfo extends Component {
  render() {
    const { matchInfo } = this.props; // Destructure matchInfo from props

    if (!matchInfo) {
      return <div>Loading...</div>; // Show loading if matchInfo is not yet available
    }
    
    return (
      <div className="p-4 bg-white rounded shadow-sm border">
        <div className="text-center bg-primary text-white p-3 rounded-top">
          <h4 className="mb-0">
            {matchInfo.matchInfo.team1.name} vs {matchInfo.matchInfo.team2.name}
          </h4>
          <p className="mb-0">{matchInfo.matchInfo.matchDescription}</p>
        </div>
        <div className="p-3">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row" className="bg-light">
                  Date
                </th>
                <td>
                  {new Date(
                    matchInfo.matchInfo.matchStartTimestamp
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-light">
                  Time
                </th>
                <td>
                  {new Date(
                    matchInfo.matchInfo.matchStartTimestamp
                  ).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}{" "}
                  LOCAL
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-light">
                  Venue
                </th>
                <td>
                  {matchInfo.matchInfo.venue.name},{" "}
                  {matchInfo.matchInfo.venue.city}
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-light">
                  Format
                </th>
                <td>{matchInfo.matchInfo.matchFormat}</td>
              </tr>
            </tbody>
          </table>
          <h5 className="text-primary mt-4">Toss</h5>
          <p className="fw-bold">{matchInfo.matchInfo.status}</p>
          <hr />
          <h5 className="text-primary">Playing Teams</h5>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Team</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {/* Team 1 */}
                <tr className="bg-light">
                  <td>
                    <h6>{matchInfo.matchInfo.team1.name}</h6>
                  </td>
                  <td>
                    <strong>Playing XI: </strong>
                    {Array.isArray(matchInfo.matchInfo.team1.playerDetails)
                      ? matchInfo.matchInfo.team1.playerDetails
                          .filter(
                            (player) =>
                              !player.substitute && !player.isSupportStaff
                          ) // Filters out players with roles and substitutes
                          .map(
                            (player) =>
                              `${player.fullName} ${
                                player.captain ? "(Captain)" : ""
                              }`
                          )
                          .join(", ")
                      : "No players listed"}
                    <br />

                    <strong>Bench Players: </strong>
                    {Array.isArray(matchInfo.matchInfo.team1.playerDetails)
                      ? matchInfo.matchInfo.team1.playerDetails
                          .filter((player) => player.substitute) // Only substitutes
                          .map((player) => player.fullName)
                          .join(", ")
                      : "No bench players listed"}
                    <br />

                    <strong>Support Staff: </strong>
                    {Array.isArray(matchInfo.matchInfo.team1.playerDetails)
                      ? matchInfo.matchInfo.team1.playerDetails
                          .filter((player) => player.isSupportStaff) // Only players with roles (support staff)
                          .map((player) => `${player.fullName}`)
                          .join(", ")
                      : "No support staff listed"}
                  </td>
                </tr>

                {/* Team 2 */}
                <tr className="bg-light">
                  <td>
                    <h6>{matchInfo.matchInfo.team2.name}</h6>
                  </td>
                  <td>
                    <strong>Playing XI: </strong>
                    {Array.isArray(matchInfo.matchInfo.team2.playerDetails)
                      ? matchInfo.matchInfo.team2.playerDetails
                          .filter(
                            (player) =>
                              !player.substitute && !player.isSupportStaff
                          ) // Filters out players with roles and substitutes
                          .map(
                            (player) =>
                              `${player.fullName} ${
                                player.captain ? "(Captain)" : ""
                              }`
                          )
                          .join(", ")
                      : "No players listed"}
                    <br />

                    <strong>Bench Players: </strong>
                    {Array.isArray(matchInfo.matchInfo.team2.playerDetails)
                      ? matchInfo.matchInfo.team2.playerDetails
                          .filter((player) => player.substitute) // Only substitutes
                          .map((player) => player.fullName)
                          .join(", ")
                      : "No bench players listed"}
                    <br />

                    <strong>Support Staff: </strong>
                    {Array.isArray(matchInfo.matchInfo.team2.playerDetails)
                      ? matchInfo.matchInfo.team2.playerDetails
                          .filter((player) => player.isSupportStaff) // Only players with roles (support staff)
                          .map((player) => `${player.fullName}`)
                          .join(", ")
                      : "No support staff listed"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />

          {/* Umpires Section */}
          <h5 className="text-primary">Umpires</h5>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row" className="bg-light">
                  Umpires
                </th>
                <td>
                  {matchInfo.matchInfo ? (
                    <>
                      <p>{matchInfo.matchInfo.umpire1.name},{matchInfo.matchInfo.umpire2.name}</p>
                    </>
                  ) : (
                    "No umpires listed"
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-light">
                  Third Umpire
                </th>
                <td>
                  {matchInfo.matchInfo ? (
                    <p>{matchInfo.matchInfo.umpire3.name}</p>
                  ) : (
                    "No third umpire listed"
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-light">
                  Match Referee
                </th>
                <td>
                  {matchInfo.matchInfo ? (
                    <p>{matchInfo.matchInfo.referee.name}</p>
                  ) : (
                    "No match referee listed"
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <hr />

          {/* Venue Guide Section */}
          <h5 className="text-primary">Venue Guide</h5>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row" className="bg-light">
                  Stadium Name
                </th>
                <td>{matchInfo.venueInfo.knownAs}</td>
              </tr>
              <tr>
                <th scope="row" className="bg-light">
                  City
                </th>
                <td>{matchInfo.venueInfo.city}</td>
              </tr>
              <tr>
                <th scope="row" className="bg-light">
                  Capacity
                </th>
                <td>{matchInfo.venueInfo.capacity || "N/A"}</td>
              </tr>
              <tr>
                <th scope="row" className="bg-light">
                  Ends
                </th>
                <td>{matchInfo.venueInfo.ends || "No report available"}</td>
              </tr>
              <tr>
                <th scope="row" className="bg-light">
                  Host to
                </th>
                <td>{matchInfo.venueInfo.homeTeam || "No report available"}</td>
              </tr>
            </tbody>
          </table>

          <h5 className="text-primary">Broadcast Details</h5>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row" className="bg-light">
                  TV Channels
                </th>
                <td>{matchInfo.broadcastInfo[0].broadcaster[1].value}</td>
              </tr>
              <tr>
                <th scope="row" className="bg-light">
                  Live Streaming
                </th>
                <td>{matchInfo.broadcastInfo[0].broadcaster[0].value}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center p-2 bg-light border-top rounded-bottom">
          <p className="text-muted mb-0">Stay tuned for live updates.</p>
        </div>
      </div>
    );
  }
}

export default MatchInfo;
