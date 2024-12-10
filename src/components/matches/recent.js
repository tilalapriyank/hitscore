import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/image/image";

export default class Recent extends Component {
  render() {
    const { matchData } = this.props;
    const { matchInfo, matchScore } = matchData.matches[0];
    const team1Innings1 = matchScore?.team1Score?.inngs1?.runs || "-";
    const team1Innings2 = matchScore?.team1Score?.inngs2?.runs || "-";
    const team2Innings1 = matchScore?.team2Score?.inngs1?.runs || "-";
    const team2Innings2 = matchScore?.team2Score?.inngs2?.runs || "-";

    return (
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h6 className="series-name">{matchInfo.seriesName}</h6>
            <span className="format-name btn btn-secondary">
              {matchInfo.matchFormat}
            </span>
          </div>
          <p className="match-number">{matchInfo.matchDesc}</p>
          <div className="team-1 d-flex">
            <Image imageId={matchInfo.team1.imageId} width={"10%"} />
            <p className="team-1-name mx-2">{matchInfo.team1.teamName}</p>
            <div className="match-score d-flex">
              <p>{team1Innings1}</p>
              {team1Innings2 !== "-" && <p>&nbsp;&amp;&nbsp;{team1Innings2}</p>}
            </div>
          </div>
          <div className="team-2 d-flex my-1">
            <Image imageId={matchInfo.team2.imageId} width={"10%"}/>
            <p className="team-2-name mx-2">{matchInfo.team2.teamName}</p>
            <div className="match-score d-flex">
              <p>{team2Innings1}</p>
              {team2Innings2 !== "-" && <p>&nbsp;&amp;&nbsp;{team2Innings2}</p>}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <p className="match-status fw-bold pt-4">{matchInfo.status}</p>
            <Link
              to={`/match-details/${matchInfo.matchId}`}
              className="btn btn-primary mt-3"
            >view</Link>
          </div>
        </div>
      </div>
    );
  }
}
