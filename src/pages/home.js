import React, { Component } from "react";
import { Link } from "react-router-dom";
import Recent from "../components/matches/recent";
import { wait } from "@testing-library/user-event/dist/utils";
import MatchTabs from "./match details/MatchTabs";

class Home extends Component {
  recentMatchData = [];
  constructor(props) {
    super(props);
    this.state = {
      recentMatchData: [],
      loading: true,
      error: null,
    };
  }
  async componentDidMount() {
    let url = `https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent`;
    let headers = {
      // "X-RapidAPI-Key": "368af94cf6msh643b0a2deb7379dp1c9b02jsn34e51b16fb12", my
      // "X-RapidAPI-Key": "5e49f223b1msh47d713ec8467bcfp186a96jsn1a7b4b20677f",
      "X-RapidAPI-Key": "87be1248f9msh187428a9aedb8ecp1673a9jsn3b0b1387b645",

      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    };

    let recentData = await fetch(url, { headers });
    let parsedData = await recentData.json();
    const validMatches = parsedData.typeMatches[0].seriesMatches.filter(
      (item) => item.seriesAdWrapper && item.seriesAdWrapper.matches
    );
    this.setState({ recentMatchData: validMatches, loading: false });
  }

  render() {
    const { recentMatchData, loading, error } = this.state;
    return (
      <div>
        {/* Recent Matchs Section */}
        <section className="recent-match bg-light py-5">
          <div className="container">
            <h2 className="text-center mb-4">Recent Matches</h2>
            <div className="row">
              {recentMatchData.map((item, index) => {
                const matchId = item.seriesAdWrapper.matches[0].matchInfo.matchId;
                return (
                  <div className="col-md-6 col-lg-4" key={index}>
                    <Recent matchData={item.seriesAdWrapper} />
                    <Link
                      to={`/match-details/${matchId}`}
                      className="btn btn-primary mt-3">
                      View Match Details
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
