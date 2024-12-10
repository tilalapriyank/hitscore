import React, { Component } from "react";
import Image from "../../assets/image/image";

class MatchSquads extends Component {
  // Render individual player or staff info
  renderPlayerInfo(player) {
    return (
      <div className="card col-6 mb-3 text-center">
        <div className="card-body d-flex">
          <Image imageId={player.faceImageId} width={"25%"} />
          <div>
            <h6 className="card-title">{player.fullName}</h6>
            <p className="card-text">
              <strong>Role:</strong> {player.role}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Render the list of players or staff in different sections (Playing 11, Bench, Support Staff)
  renderTeamPlayers(players, sectionType) {
    const sectionPlayers = players.filter((player) => {
      if (sectionType === "playing11") {
        return player.substitute === false && !player.isSupportStaff;
      } else if (sectionType === "bench") {
        return player.substitute === true && !player.isSupportStaff;
      } else if (sectionType === "supportStaff") {
        return player.isSupportStaff === true;
      }
      return false;
    });

    return (
      <div className="d-flex flex-wrap justify-content-between">
        {sectionPlayers.length > 0 ? (
          sectionPlayers.map((player) => this.renderPlayerInfo(player))
        ) : (
          <p className="text-center">No players in this section.</p>
        )}
      </div>
    );
  }

  // Main render method
  render() {
    const { MatchSquads } = this.props;
    if (!MatchSquads) {
      return <div>Loading...</div>;
    }

    const { matchInfo } = MatchSquads;
    const { team1, team2 } = matchInfo;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <div className="col-md-5">
                <h5 className="text-center">{team1.name}</h5>
              </div>
              <div className="col-md-5">
                <h5 className="text-center">{team2.name}</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Playing 11 for both teams */}
        <div className="row">
          <div className="col-12">
            <h4 className="text-center">Playing 11</h4>
            <div className="d-flex justify-content-between">
              {/* Team 1 Playing 11 */}
              <div className="col-md-5">
                {team1.playerDetails ? (
                  this.renderTeamPlayers(team1.playerDetails, "playing11")
                ) : (
                  <p className="text-center">Loading team 1 players...</p>
                )}
              </div>
              {/* Team 2 Playing 11 */}
              <div className="col-md-5">
                {team2.playerDetails ? (
                  this.renderTeamPlayers(team2.playerDetails, "playing11")
                ) : (
                  <p className="text-center">Loading team 2 players...</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bench for both teams */}
        <div className="row mt-4">
          <div className="col-12">
            <h4 className="text-center">Bench</h4>
            <div className="d-flex justify-content-between">
              {/* Team 1 Bench */}
              <div className="col-md-5">
                {team1.playerDetails ? (
                  this.renderTeamPlayers(team1.playerDetails, "bench")
                ) : (
                  <p className="text-center">Loading team 1 bench...</p>
                )}
              </div>
              {/* Team 2 Bench */}
              <div className="col-md-5">
                {team2.playerDetails ? (
                  this.renderTeamPlayers(team2.playerDetails, "bench")
                ) : (
                  <p className="text-center">Loading team 2 bench...</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Support Staff for both teams */}
        <div className="row mt-4">
          <div className="col-12">
            <h4 className="text-center">Support Staff</h4>
            <div className="d-flex justify-content-between">
              {/* Team 1 Support Staff */}
              <div className="col-md-5">
                {team1.playerDetails ? (
                  this.renderTeamPlayers(team1.playerDetails, "supportStaff")
                ) : (
                  <p className="text-center">Loading team 1 support staff...</p>
                )}
              </div>
              {/* Team 2 Support Staff */}
              <div className="col-md-5">
                {team2.playerDetails ? (
                  this.renderTeamPlayers(team2.playerDetails, "supportStaff")
                ) : (
                  <p className="text-center">Loading team 2 support staff...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MatchSquads;
