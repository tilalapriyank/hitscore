import React, { Component } from 'react';

class MatchSquads extends Component {
  render() {
    return (
      <div className="p-4 bg-light rounded shadow-sm">
        <h4 className="text-primary mb-3">Squads</h4>
        <div className="row">
          <div className="col-md-6">
            <h5>India</h5>
            <ul>
              <li>Rohit Sharma (c)</li>
              <li>Virat Kohli</li>
              <li>KL Rahul</li>
              <li>Jasprit Bumrah</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Pakistan</h5>
            <ul>
              <li>Babar Azam (c)</li>
              <li>Shaheen Afridi</li>
              <li>Mohammad Rizwan</li>
              <li>Shadab Khan</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MatchSquads;
