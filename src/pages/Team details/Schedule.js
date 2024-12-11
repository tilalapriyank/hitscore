import React, { Component } from "react";

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: { teamMatchesData: [] },
    };
  }
  async componentDidMount() {
    const { teamId } = this.props;
    if (teamId) {
      const url = `https://cricbuzz-cricket.p.rapidapi.com/teams/v1/${teamId}/schedule`;
      const headers = {
        "X-RapidAPI-Key": "5e49f223b1msh47d713ec8467bcfp186a96jsn1a7b4b20677f",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      };
      const response = await fetch(url, { headers });
      const data = await response.json();
      this.setState({ schedule: data });
    }
  }
  renderTableRow(match, key) {
    
    const startTime = new Date(Number(match.matchInfo.startDate)); 
    const endTime = match.matchInfo.endDate
      ? new Date(Number(match.matchInfo.endDate)) 
      : null;

    const toIST = (date) => {
      const options = {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, 
      };
      const formattedDate = new Date(date).toLocaleString("en-IN", options);

      const [month, day, time, period] = formattedDate.split(", ");
      return `${month} ${day}`;
    };
    const isSameDate = (start, end) => {
      return start.toDateString() === end.toDateString();
    };
    
    const formatDateRange = (start, end) => {
      const options = {
        month: "short",
        day: "numeric",
        weekday: "short",
      };
      const startDate = start.toLocaleDateString("en-US", options);
      const endDate =
        end && !isSameDate(start, end)
          ? end.toLocaleDateString("en-US", options)
          : null;
      return `${startDate}${endDate ? " - " + endDate : ""}`;
    };

    const dateRange = formatDateRange(startTime, endTime);

    return (
      <tr key={key}>
        <td>{dateRange}</td>
        <td>{match.matchInfo.matchDesc}</td>
        <td>
          {match.matchInfo.team1.teamName} vs {match.matchInfo.team2.teamName}
        </td>
        <td>
          {match.matchInfo.venueInfo.ground}, {match.matchInfo.venueInfo.city}
        </td>
        <td>{`Match starts at ${toIST(startTime)}`}</td>
      </tr>
    );
  }

  renderSeriesDetails(series, index) {
    return (
      <div key={index}>
        {/* Display Series Name Here */}
        <h3 className="text-center text-primary">
          {series.matchDetailsMap.key}
        </h3>{" "}
        {/* Ensure the correct series name is shown */}
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Date</th>
                <th>Match Description</th>
                <th>Teams</th>
                <th>Venue</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {series.matchDetailsMap?.match.map((match, matchIndex) =>
                this.renderTableRow(match, `${index}-${matchIndex}`)
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  render() {
    const { teamMatchesData } = this.state.schedule;

    const filteredMatches =
      teamMatchesData?.filter((item) => !item.adDetail) || [];

    return (
      <div className="container mt-4">
        <h2 className="mb-4 text-center text-secondary">Team Schedule</h2>
        {filteredMatches.length > 0 ? (
          filteredMatches.map((series, index) =>
            this.renderSeriesDetails(series, index)
          )
        ) : (
          <div className="text-center">
            <div
              className="spinner-border text-primary"
              role="status"
              aria-hidden="true"
            ></div>
            <p className="mt-3">Loading schedule...</p>
          </div>
        )}
      </div>
    );
  }
}
