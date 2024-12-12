import React, { Component } from "react";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchResults: { teamMatchesData: [] },
      isLoading: true,
      error: null,
    };
  }

  async componentDidMount() {
    const { teamId } = this.props;
    if (teamId) {
      const apiUrl = `https://cricbuzz-cricket.p.rapidapi.com/teams/v1/${teamId}/results`;
      const apiHeaders = {
        "X-RapidAPI-Key": "8b50554ad0msh2d9d7222c0fdf3cp18bee1jsn73b25325bca0", // Replace with your RapidAPI key
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      };
      try {
        const response = await fetch(apiUrl, { headers: apiHeaders });
        const data = await response.json();
        this.setState({
          matchResults: data,
          isLoading: false,
        });
      } catch (error) {
        this.setState({ error: "Failed to load data", isLoading: false });
      }
    }
  }

  formatDate(timestamp) {
    const date = new Date(Number(timestamp));
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  renderTableRow(match, key) {
    const startTime = new Date(Number(match.matchInfo.startDate));
    const endTime = match.matchInfo.endDate
      ? new Date(Number(match.matchInfo.endDate))
      : null;

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
        <td>
          <a
            href={`/match-details/${match.matchInfo.matchId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {match.matchInfo.matchDesc}
          </a>
        </td>
        <td>
          {match.matchInfo.team1.teamName} vs {match.matchInfo.team2.teamName}
        </td>
        <td>
          {match.matchInfo.venueInfo.ground}, {match.matchInfo.venueInfo.city}
        </td>
        <td>{match.matchInfo.status}</td>
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
    const { teamMatchesData } = this.state.matchResults;

    const filteredMatches =
      teamMatchesData?.filter((item) => !item.adDetail) || [];

    return (
      <div className="container mt-4">
        <h2 className="mb-4 text-center text-secondary">Team Results</h2>
        {this.state.isLoading ? (
          <div className="text-center">
            <div
              className="spinner-border text-primary"
              role="status"
              aria-hidden="true"
            ></div>
            <p className="mt-3">Loading Results...</p>
          </div>
        ) : filteredMatches.length > 0 ? (
          filteredMatches.map((series, index) =>
            this.renderSeriesDetails(series, index)
          )
        ) : (
          <p>No results available.</p>
        )}
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}
