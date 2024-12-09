import React, { Component } from 'react';

class MatchSquads extends Component {
  render() {
    return (
      <div className="p-4 bg-white rounded shadow-sm border">
  <div className="text-center bg-primary text-white p-3 rounded-top">
    <h4 className="mb-0">India vs Pakistan</h4>
    <p className="mb-0">Team Squads</p>
  </div>
  <div className="p-3">
    <h5 className="text-primary">India Squad</h5>
    <table className="table table-bordered">
      <thead className="bg-light">
        <tr>
          <th>Role</th>
          <th>Players</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Batsmen</td>
          <td>Rohit Sharma, Virat Kohli, Shubman Gill</td>
        </tr>
        <tr>
          <td>Bowlers</td>
          <td>Jasprit Bumrah, Mohammed Siraj, Kuldeep Yadav</td>
        </tr>
        <tr>
          <td>All-rounders</td>
          <td>Hardik Pandya, Ravindra Jadeja</td>
        </tr>
        <tr>
          <td>Wicketkeepers</td>
          <td>KL Rahul, Ishan Kishan</td>
        </tr>
      </tbody>
    </table>

    <h5 className="text-primary mt-4">Pakistan Squad</h5>
    <table className="table table-bordered">
      <thead className="bg-light">
        <tr>
          <th>Role</th>
          <th>Players</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Batsmen</td>
          <td>Babar Azam, Fakhar Zaman, Imam-ul-Haq</td>
        </tr>
        <tr>
          <td>Bowlers</td>
          <td>Shaheen Afridi, Haris Rauf, Naseem Shah</td>
        </tr>
        <tr>
          <td>All-rounders</td>
          <td>Shadab Khan, Mohammad Nawaz</td>
        </tr>
        <tr>
          <td>Wicketkeepers</td>
          <td>Mohammad Rizwan</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="text-center p-2 bg-light border-top rounded-bottom">
    <p className="text-muted mb-0">Complete squads for the match.</p>
  </div>
</div>

    );
  }
}

export default MatchSquads;
