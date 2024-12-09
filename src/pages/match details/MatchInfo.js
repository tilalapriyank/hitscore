import React, { Component } from 'react';

class MatchInfo extends Component {
  render() {
    return (
      <div className="p-4 bg-light rounded shadow-sm">
        <h4 className="text-primary mb-3">Match Details</h4>
        <ul className="list-unstyled">
          <li><strong>Match:</strong> India vs Pakistan</li>
          <li><strong>Date:</strong> December 9, 2024</li>
          <li><strong>Time:</strong> 3:00 PM IST</li>
          <li><strong>Venue:</strong> Dubai International Cricket Stadium</li>
          <li><strong>Format:</strong> ODI</li>
        </ul>
        <hr />
        <h5 className="text-secondary">Toss</h5>
        <p>India won the toss and elected to bat.</p>
      </div>
    );
  }
}

export default MatchInfo;
