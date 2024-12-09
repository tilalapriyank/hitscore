import React, { Component } from 'react';

class MatchScorecard extends Component {
  render() {
    return (
      <div className="p-4 bg-light rounded shadow-sm">
        <h4 className="text-primary mb-3">Scorecard</h4>
        <table className="table table-bordered table-hover">
          <thead className="bg-primary text-white">
            <tr>
              <th>Batsman</th>
              <th>Runs</th>
              <th>Balls</th>
              <th>Fours</th>
              <th>Sixes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rohit Sharma</td>
              <td>90</td>
              <td>75</td>
              <td>12</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Virat Kohli</td>
              <td>105</td>
              <td>100</td>
              <td>10</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MatchScorecard;
