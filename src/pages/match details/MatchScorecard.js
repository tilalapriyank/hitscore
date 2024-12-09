import React, { Component } from 'react';

class MatchScorecard extends Component {
  render() {
    return (
      <div className="p-4 bg-white rounded shadow-sm border">
  <div className="text-center bg-primary text-white p-3 rounded-top">
    <h4 className="mb-0">India vs Pakistan</h4>
    <p className="mb-0">Scorecard</p>
  </div>
  <div className="p-3">
    <h5 className="text-primary">India Innings</h5>
    <table className="table table-bordered">
      <thead className="bg-light">
        <tr>
          <th>Batsman</th>
          <th>Runs</th>
          <th>Balls</th>
          <th>Fours</th>
          <th>Sixes</th>
          <th>Strike Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rohit Sharma</td>
          <td>72</td>
          <td>50</td>
          <td>8</td>
          <td>3</td>
          <td>144.00</td>
        </tr>
        <tr>
          <td>Virat Kohli</td>
          <td>85*</td>
          <td>70</td>
          <td>7</td>
          <td>1</td>
          <td>121.43</td>
        </tr>
        <tr>
          <td>Shubman Gill</td>
          <td>45</td>
          <td>36</td>
          <td>6</td>
          <td>1</td>
          <td>125.00</td>
        </tr>
      </tbody>
    </table>

    <h5 className="text-primary mt-4">Bowling - Pakistan</h5>
    <table className="table table-bordered">
      <thead className="bg-light">
        <tr>
          <th>Bowler</th>
          <th>Overs</th>
          <th>Maidens</th>
          <th>Runs</th>
          <th>Wickets</th>
          <th>Economy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Shaheen Afridi</td>
          <td>10</td>
          <td>0</td>
          <td>50</td>
          <td>2</td>
          <td>5.00</td>
        </tr>
        <tr>
          <td>Haris Rauf</td>
          <td>9</td>
          <td>1</td>
          <td>42</td>
          <td>1</td>
          <td>4.67</td>
        </tr>
        <tr>
          <td>Shadab Khan</td>
          <td>10</td>
          <td>0</td>
          <td>62</td>
          <td>1</td>
          <td>6.20</td>
        </tr>
      </tbody>
    </table>

    <h5 className="text-primary mt-4">Summary</h5>
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th scope="row" className="bg-light">Total Runs</th>
          <td>320/5</td>
        </tr>
        <tr>
          <th scope="row" className="bg-light">Overs</th>
          <td>50</td>
        </tr>
        <tr>
          <th scope="row" className="bg-light">Run Rate</th>
          <td>6.40</td>
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

export default MatchScorecard;
