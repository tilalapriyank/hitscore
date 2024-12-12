import React, { Component } from "react";
import Recent from "../components/matches/recent";

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
      // "X-RapidAPI-Key": "368af94cf6msh643b0a2deb7379dp1c9b02jsn34e51b16fb12", //my
      // "X-RapidAPI-Key": "5e49f223b1msh47d713ec8467bcfp186a96jsn1a7b4b20677f",
      "X-RapidAPI-Key": "8b50554ad0msh2d9d7222c0fdf3cp18bee1jsn73b25325bca0",
      // "X-RapidAPI-Key": "87be1248f9msh187428a9aedb8ecp1673a9jsn3b0b1387b645",
      // "X-RapidAPI-Key": "dd76d23715msh3ae2c9a68068085p1e4b89jsnb016433712a0",


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
    const { recentMatchData } = this.state;
    return (
      <div>
        {/* Recent Matchs Section */}
        <section className="recent-match bg-light py-5">
          <div className="container">
            <h2 className="text-center mb-4">Recent Matches</h2>
            <div className="row"> 
              {recentMatchData.map((item, index) => {
                // const matchId = item.seriesAdWrapper.matches[0].;
                return (
                  <div className="col-md-6 col-lg-4" key={index}>
                    <Recent matchData={item.seriesAdWrapper} />
                    
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
