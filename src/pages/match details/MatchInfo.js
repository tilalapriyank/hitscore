import React, { Component } from "react";

class MatchInfo extends Component {
  render() {
    return (
      <div className="p-4 bg-white rounded shadow-sm border">
        <div className="text-center bg-primary text-white p-3 rounded-top">
          <h4 className="mb-0">India vs Pakistan</h4>
          <p className="mb-0">ODI Match</p>
        </div>
        <div className="p-3">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row" className="bg-light">
                  Date
                </th>
                <td>December 9, 2024</td>
              </tr>
              <tr>
                <th scope="row" className="bg-light">
                  Time
                </th>
                <td>3:00 PM IST</td>
              </tr>
              <tr>
                <th scope="row" className="bg-light">
                  Venue
                </th>
                <td>Dubai International Cricket Stadium</td>
              </tr>
              <tr>
                <th scope="row" className="bg-light">
                  Format
                </th>
                <td>ODI</td>
              </tr>
            </tbody>
          </table>
          <h5 className="text-primary mt-4">Toss</h5>
          <p>India won the toss and elected to bat.</p>
          <hr />
          <h5 className="text-primary">Playing Teams</h5>
          <table className="table table-bordered">
            <thead className="bg-light">
              <tr>
                <th>Team</th>
                <th>Key Players</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>India</td>
                <td>Rohit Sharma, Virat Kohli, Jasprit Bumrah</td>
              </tr>
              <tr>
                <td>Pakistan</td>
                <td>Babar Azam, Shaheen Afridi, Mohammad Rizwan</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h5 className="text-primary">Broadcast Details</h5>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row" className="bg-light">
                  TV Channels
                </th>
                <td>Star Sports, PTV Sports</td>
              </tr>
              <tr>
                <th scope="row" className="bg-light">
                  Live Streaming
                </th>
                <td>Disney+ Hotstar, Cricbuzz App</td>
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
